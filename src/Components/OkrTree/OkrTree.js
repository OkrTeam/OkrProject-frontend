import React from "react";
import CustomNavbar from "../CustomNavbar";
import './OkrTreeStyle.css';
import TeamArray from '../data/TeamArray'
import OkrTeam from "./OkrTeam";

function OkrTree() {

    function getIndex(name) {
        return TeamArray.findIndex(obj => obj.name === name);
    }

    return (
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username' />
            <div className="wrapper">
                <ul>
                    <li>
                        <div className="circle_wrapper main_circle">
                            <div className="circleOkr">
                                <p>Dodo</p>
                                <ul>
                                    {TeamArray.map(TeamArray => {
                                        return(<OkrTeam name={TeamArray.name} index={getIndex(TeamArray.name)+1} />)
                                    })}
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OkrTree