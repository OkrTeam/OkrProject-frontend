import React from 'react'
import {Table} from "reactstrap";
import s from './ratingTable.module.css'
import balloon from '../../../Images/balloon with confetti.png'
import first from '../../../Images/1th.png'
import second from '../../../Images/2th.png'
import third from '../../../Images/3th.png'

function Rating() {
    return(
        <div>
            <div className={s.card_title}>
                <h3>Топ команд</h3>
                {/*<img src={balloon}/>*/}
            </div>
            <Table hover className={`${s.table_container} ${s.box_shadow}`}>
                
                <tbody>
                <tr>
                    <th scope="row"><img src={first} className={s.rating_img}/></th>
                    <td>Team 1</td>
                </tr>
                <tr>
                    <th scope="row"><img src={second} className={s.rating_img}/></th>
                    <td>Team 2</td>
                </tr>
                <tr>
                    <th scope="row"><img src={third} className={s.rating_img}/></th>
                    <td>Team 3</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Rating
