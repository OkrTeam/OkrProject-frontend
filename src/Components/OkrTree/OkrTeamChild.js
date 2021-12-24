import React, {useEffect} from "react";
import './OkrTreeStyle.css';

function OkrTeamChild(props) {

    return (
        <div className="circle-wrapper">
            <div className="node2"/>
            <div className="circleTeam">
                <p className="treeName">{props.name}</p>
            </div>
        </div>
    )
}

export default OkrTeamChild