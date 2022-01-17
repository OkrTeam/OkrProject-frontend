import React from 'react'
import GoalList from "../GoalList";
import s from './MainTargetList.module.css'
import '../targetList.css'
import '../../../media.css';
import '../targetList.css'
import CustomNavbar from "../../CustomNavbar";
import '../../../media.css';

function MainTargetList() {
    return (
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username' />
            <div className="container">
            <div className={s.watchOKR}>
                <div className={s.add}>
                    Твои цели
                </div>
                <a href='/add_okr'> <button className={s.btn}>
                    Добавить
                </button></a>
                <div className={s.goals}>
                    <div className={s.inrow}>
                        <div className={s.text}>
                            Цели:
                        </div>
                        <div className={s.progressLabel}>
                            Прогресс и кварталы:
                        </div>
                    </div>
                    <ul>
                        <GoalList />
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MainTargetList