import React from 'react';
import classes from './Targets.module.css'

//TODO: fix mark-untarget-container


function TargetList(props) {
    return(
        <div className='container'>
            <div className={classes.row}>
                <h3>{props.title}</h3>
                <div className={`${classes.target_container} ${classes.box_shadow} col-12 mb-4`}>
                    <b>Мы нанимаем лучших в IT</b>
                    <div className={classes.blue}>
                        IT HR
                    </div>
                </div>
                <div className={`${classes.untarget_container} col-10 offset-2 mb-2`}>
                    <div className={classes.text}>
                    100% годового бэклога закрыто
                    </div>
                </div>
                <div className={`${classes.untarget_container} ${classes.mark_untarget_container} col-10 offset-2 mb-4 `}>
                    <div className={classes.text}>
                        Увеличили индекс удовлетворенности нанимающих менеджеров до 4.8
                    </div>
                </div>

                <div className={`${classes.target_container} ${classes.box_shadow} col-12 mb-4`}>
                    <b>Мы нанимаем лучших в IT</b>
                    <div className={classes.pink}>
                        IT Hiring
                    </div>
                </div>
                <div className={`${classes.untarget_container} col-10 offset-2 mb-2`}>
                    <div className={classes.text}>
                        eNPS в IT до 70%
                    </div>
                </div>
                <div className={`${classes.untarget_container} col-10 offset-2 mb-2`}>
                    <div className={classes.text}>
                        Уровень годовой текучести 10%
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TargetList
