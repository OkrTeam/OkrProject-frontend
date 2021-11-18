import React, { useState } from "react";
import './navbarStyle.css'

function AddForm() {

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        //Создание команды
    }

    return(
        <div>
            <button type="button" className="btn add-team-btn round" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Добавить команду
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Добавление команды</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={submitHandler}>
                                <input type='text' className='form-item form-control margin-bottom' name='name'
                                       onChange={event => setName(event.target.value)} placeholder='Название команды'/>
                                <select className="form-select form-control" name='department'
                                        onChange={event => setDepartment(event.target.value)}>
                                    <option selected>Выберите подразделение</option>
                                    <option value="1">Dodo Engineering</option>
                                    <option value="2">Dodo 42</option>
                                </select>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn plan-btn round" data-bs-dismiss="modal">Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddForm