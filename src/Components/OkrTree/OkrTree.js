import React from "react";
import CustomNavbar from "../CustomNavbar";
import './OkrTreeStyle.css';

function OkrTree() {
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
                                    <li>
                                        <div className="circle_wrapper sub_circle sub_circle_size">
                                            <div className="circleTeam">
                                                <p>Team 1</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle_wrapper sub_circle2 sub_circle_size">
                                            <div className="circleTeam">
                                                <p>Team 2</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle_wrapper sub_circle3 sub_circle_size">
                                            <div className="circleTeam">
                                                <p>Team 3</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle_wrapper sub_circle4 sub_circle_size">
                                            <div className="circleTeam">
                                                <p>Team 4</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle_wrapper sub_circle5 sub_circle_size">
                                            <div className="circleTeam">
                                                <p>Team 5</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle_wrapper sub_circle6 sub_circle_size">
                                            <div className="circleTeam">
                                                <p>Team 6</p>
                                            </div>
                                        </div>
                                    </li>
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