import React from 'react';

const OkrModalDelete = (props) => {

    return (
            <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal_center">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Удалить {props.name}?</p>
                        </div>
                        <div className="modal-footer modal_buttons">
                            <button type="button" className="delete_modal delete-button" data-bs-dismiss="modal">Подтвердить</button>
                            <button type="button" className="close-modal" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default OkrModalDelete;