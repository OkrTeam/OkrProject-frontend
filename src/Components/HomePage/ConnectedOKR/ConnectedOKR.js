import React from 'react'
import s from './connectedOkr.module.css'

function ConnectedOKR(props) {
    return(
        <div>
            <div className='card-title'>
                <h3>Другие OKR'ы</h3>
            </div>
            <div>
                <div className={`${s.text_center} ${s.okrs_container} ${s.box_shadow}`}>
                    <a href='#' className={s.okr_link}>OKR компании</a>
                </div>
                <div className={`${s.text_center} ${s.okrs_container} ${s.box_shadow}`}>
                    <a href='#' className={s.okr_link}>OKR подразделения</a>
                </div>
                <div className={`${s.text_center} ${s.okrs_container} ${s.box_shadow}`}>
                    <a href='#' className={s.okr_link}>OKR команды</a>
                </div>
            </div>
        </div>
    )
}

export default ConnectedOKR
