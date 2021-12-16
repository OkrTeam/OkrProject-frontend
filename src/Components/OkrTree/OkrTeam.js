import React, {useState} from "react";
import './OkrTreeStyle.css';
import TeamArray from '../data/TeamArray'

function OkrTeam(props) {

    const [state, setState] = useState({
        visible: false
    });

    function toggle_vision() {
        const currentState = state.visible;
        setState({visible: !currentState});
    }

    return (
        <div className="circle-wrapper">
            <div className="node2"/>
            <div className="circleTeam" onClick={() => toggle_vision()}>
                <p>{props.name}</p>
            </div>
            <div className={state.visible ? 'node2': 'invisible'}/>
            <div className={state.visible ? 'branch2': 'invisible'}/>
        </div>
    )
}

export default OkrTeam