import React, {useState,useEffect} from "react";
import './OkrTreeStyle.css';
import OkrTeamChild from "./OkrTeamChild";

function OkrTeam(props) {

    useEffect(() => {
        SetProgress(props.progress);
    }, []);

    const [state, setState] = useState({
        visible: false
    });

    function getIndex(name) {
        return props.children.findIndex(obj => obj.name === name);
    }

    function SetWidth(){
        let elem = document.getElementsByClassName('branch2')[0];
        elem.style.width = `${133 + 130 * (props.children.length-1)}%`;
    }

    function SetProgress(percent) {
        const circle = document.getElementsByClassName('progress-ring')[props.index]
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference - (percent /100 * circumference);
        console.log(circle.style.strokeDashoffset)
        console.log(props.index)
    }

    function toggle_vision() {
        const currentState = state.visible;
        const promise = new Promise((resolve, reject) => {
            setState({visible:(!currentState)});
            resolve();
        });
        promise.then(() => {
            if (!state.visible)
                SetWidth();
        });
    }

    return (
        <div className="circle-wrapper">
            <div className="node2"/>
            <div className="circleTeam" onClick={() => toggle_vision()}>
                <svg className="progress-svg" width="100" height="100">
                    <circle className="progress-ring" stroke="black" stroke-width="4" cx="50" cy="50" r="45" fill="transparent"/>
                    <text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20">{props.progress}</text>
                </svg>
            </div>
            <div className={state.visible ? 'node2': 'invisible'}/>
            <div className={state.visible ? 'branch2': 'invisible'}>
                <div>
                    <div className="row align-items-start">
                        {props.children.map(team => {
                            return (
                                <div className="col">
                                    <OkrTeamChild name={team.name} index={getIndex(team.name)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OkrTeam