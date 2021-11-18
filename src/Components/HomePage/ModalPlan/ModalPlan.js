import React from 'react';
import s from './modalPlan.module.css'

const ModalPlan = () => {

    return (
        <div>
            <button
                type="button" className={`${s.btn} ${s.plan_btn} ${s.round}`}
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
            >
                Открыть план 3 на 3
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">План 3 на 3</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            Описание
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPlan;