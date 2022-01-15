import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from "react-redux";
import { login } from "../Actions/actions";
import config from '../config.json';
import { withRouter, Redirect } from "react-router-dom";
import '../LoginStyle.css';
import logo from '../../Images/dodo.png'


class Login extends Component {

    googleResponse = (response) => {
        console.log(response);
        if (!response.tokenId) {
            console.error("Unable to get tokenId from Google", response)
            return;
        }

        const tokenBlob = new Blob([JSON.stringify({tokenId: response.tokenId}, null, 2)], {type: 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch(config.GOOGLE_AUTH_CALLBACK_URL, options)
            .then(r => {
                r.json().then(user => {
                    const token = user.token;
                    console.log(token);
                    this.props.login(token);
                })
            })
    }

    render() {
        let content = !!this.props.auth.isAuthenticated ?
            (
                <div>
                    <Redirect to={{
                        pathname: '/'
                    }} />
                </div>
            ) :
            (
                <div className="login-wrapper">
                    <p>
                        <GoogleLogin className="googleAuth"
                            clientId={config.GOOGLE_CLIENT_ID}
                            buttonText="Google Login"
                            onSuccess={this.googleResponse}
                            onFailure={this.googleResponse}
                        />
                    </p>
                    <img src={logo} className='brand-background1' />
                    <img src={logo} className='brand-background2' />
                </div>
            );

        return (
            <div>
                <div className='container'>
                    <div className="login">
                        <div>
                            <h3 className="title">Для работы с приложением необходимо авторизоваться в системе</h3>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (token) => {
            dispatch(login(token));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));