import React, {useEffect, useState} from "react";
import CustomNavbar from "../CustomNavbar";
import './OkrTreeStyle.css';
import TeamArray from '../data/TeamArray'
import OkrTeam from "./OkrTeam";

function OkrTree() {

    const [state, setState] = useState({
        visible: false
    });

    function getIndex(name) {
        return TeamArray.findIndex(obj => obj.name === name);
    }

    function SetWidth(){
        let elem = document.getElementsByClassName('branch')[0];
        elem.style.width = `${10 + 15 * (TeamArray.length-1)}%`;
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
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username' />
            <div className="wrapper">
                <div className="circleOkr" onClick={toggle_vision}>
                    <p className="treeName">Dodo</p>
                </div>
                <div className={state.visible ? 'node': 'invisible'}/>
                <div className={state.visible ? 'branch': 'invisible'}>
                    <div>
                        <div className="row align-items-start">
                            {TeamArray.map(team => {
                                return (
                                    <div className="col">
                                        <OkrTeam name={team.name} progress={team.team_progress} index={getIndex(team.name)}
                                            children={team.children}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OkrTree