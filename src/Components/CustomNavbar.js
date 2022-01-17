import React, {Component} from "react";
import './Teams/navbarStyle.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/dropdown.js'
import logo from '../Images/dodo.png'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class CustomNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.state.isOpen);
    }

    render() {
        let loginLink = '';
        let loginText = '';
        let userName = '';

        if (this.props.auth.isAuthenticated) {
            loginLink = '/logout';
            loginText = 'Выйти';
            userName = 'Андрей Емельянов';
        }
        else {
            loginLink = '/login';
            loginText = 'Выйти';
            userName = '';
        }

        return (
            <div>
                <Navbar  light expand="md" className='grey-navbar'>
                    <NavbarBrand href="/home"><img src={logo} className='img-brand' />Dodo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse  navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/my_okr">Мой OKR</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/okr_tree">Дерево OKR</NavLink>
                            </NavItem>
                        </Nav>
                        <div className='username'>
                            {userName}
                        </div>
                        <div>
                            <button className='delete-button delete_modal'><a className='color' href={loginLink}>{loginText}</a></button>
                        </div>
                    </Collapse>
                </Navbar>
                <div className="menu-mobile" style={{ display: `${this.state.isOpen ? 'block' : 'none'}` }}>
                    <NavLink href="/my_okr" className="option-mobile">Мой OKR</NavLink>
                    <NavLink href="/okr_tree" className="option-mobile">Дерево OKR</NavLink>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default withRouter(connect(mapStateToProps)(CustomNavbar));