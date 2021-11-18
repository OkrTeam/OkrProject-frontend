import React from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';

async function getTeams() {
    let response = await fetch('http://localhost:5000/api/teams', {
        method: 'GET',
        mode:'no-cors'
    });
    let result = response.json();
        return result;
}

const TeamItem = (props) => {
    return(
        <div>
            <Card className='margin-bottom'>
                <CardBody className='list-item'>
                    <CardTitle tag="h5">{props.team.name}</CardTitle>
                    <ul className='list-style'>
                        <>  
                            {props.team.participants.map((participant) => {
                                return (
                                    <li className='list-item'><a href='#' className='person-link'>{participant}</a></li>
                                )
                            })
                            }
                        </>
                    </ul>
                </CardBody>
            </Card>
        </div>
    )
}

export default TeamItem