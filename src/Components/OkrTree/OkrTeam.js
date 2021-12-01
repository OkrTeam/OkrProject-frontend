import React, {useState} from "react";
import './OkrTreeStyle.css';
import TeamArray from '../data/TeamArray'

function OkrTeam(props) {

    const [state, setState] = useState({
        active: false
    });

    const toggleClass = () => {
        const currentState = state.active;
        setState({active: !currentState});
    };

    return (
        <li>
            <div className={`circle_wrapper sub_circle${props.index} sub_circle_size`}>
                <div  className={state.active ? 'zoom': 'circleTeam'} onClick={() => toggleClass()} >
                    <p className={`circle_title${props.index}`}>{props.name}</p>
                </div>
            </div>
        </li>
    )
}

export default OkrTeam