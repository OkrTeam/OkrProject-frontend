import React, {useState,useEffect} from "react";
import './OkrTreeStyle.css';
import '../../Images/close.png'

function OkrTeam(props) {

    useEffect(() => {
        SetProgress(props.progress)
    }, []);

    const [state, setState] = useState({
        visible: false,
        visible_info:false,
        id:props.id
    });

    useEffect(() => {
        console.log(state)
    }, [state]);

    function SetWidth(){
        const promise = new Promise((resolve, reject) => {
            let elem = document.getElementById(props.id);
            resolve(elem);
        });
        promise.then(elem => {
            elem.style.width = `${133 + 130 * (props.children.length - 1)}%`;
        });
    }

    function SetProgress(percent) {
        const circle = document.getElementById(props.name);
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference - (percent /100 * circumference);
    }

    function toggle_vision() {
        console.log("toggle()_vision");
        const currentState = state.visible;
        const currentState_info = state.visible_info;
        const promise = new Promise((resolve, reject) => {
            if (state.visible === true && state.visible_info === false) {
                setState({visible:(!currentState),visible_info:false});
            }
            else
                setState({visible:(!currentState),visible_info:(!currentState_info)});
            resolve();
        });
        promise.then(() => {
            if (!state.visible)
                SetWidth();
        });
    }

    function toggle_info() {
        const currentState = state.visible;
        const currentState_info = state.visible_info;
        setState({visible_info:(!currentState_info),visible: currentState})
        console.log("toggle_info()");
    }

    return (
        <div className="circle-wrapper">
            <div className="node2"/>
            <div className="circleTeam" onClick={() => toggle_vision()}>
                <svg className="progress-svg" width="100" height="100">
                    <circle className="progress-ring" stroke="black" stroke-width="4" cx="50" cy="50" r="45" fill="transparent" id={props.name}/>
                    <text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20">{props.name}</text>
                </svg>
            </div>
            <div className={(state.visible && props.children.length !== 0) ? 'node2': 'invisible'}/>
            <div className={(state.visible && props.children.length !== 0) ? 'branch2': 'invisible'} id={props.id}>
                <div>
                    <div className="row align-items-start">
                        {props.children.map(team => {
                            return (
                                <div className="col">
                                    <OkrTeam name={team.name} progress={team.team_progress} children={team.children} id={team.id}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={state.visible_info? 'info': 'invisible'}>
                <div className="button-wrapper">
                    <div className="close-button" onClick={() => toggle_info()}>
                        <img src={require("../../Images/close.png")} width="30" height="30"/>
                    </div>
                </div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default OkrTeam