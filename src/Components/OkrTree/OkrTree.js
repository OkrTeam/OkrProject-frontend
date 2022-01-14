import React, {useEffect, useState} from "react";
import CustomNavbar from "../CustomNavbar";
import './OkrTreeStyle.css';
import TeamArray from '../data/TeamArray'
import OkrTeam from "./OkrTeam";

function OkrTree() {

    const [state, setState] = useState({
        visible: false,
        selected_name: "не выбрано",
    });

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
                <div className="button-zone">
                    <a className="ref" href='/add_team'>
                        <button className="add-button menu">Добавить команду</button>
                    </a>
                </div>
                <div className="select-info">
                    <p>Выбранная команда:</p>
                    <p>{state.selected_name}</p>
                    <a className="ref-2" href='/edit_team'>
                        <button className="edit-button menu">Редактировать команду</button>
                    </a>
                    <a className="ref-3" href='#'>
                        <button className="delete-button menu">Удалить команду</button>
                    </a>
                </div>
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
                                        <OkrTeam name={team.name} progress={team.team_progress} children={team.children} id={team.id}/>
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