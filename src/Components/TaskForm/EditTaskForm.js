import React from 'react';
import s from './taskStyle.module.css'
import CustomNavbar from "../CustomNavbar";

function EditTaskList() {
    return(
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username'/>
            <div className='container'>
                <div className={s.row}>
                        <form>

                        <div className='col-12'>
                            <h3>Редактирование цели</h3>
                        </div>

                        <div className='col-12'>
                            <input type='text' placeholder='Новая цель' className={s.task_input}/>
                            <div className={`${s.tags_container} ${s.box_shadow} col-12 mb-4`}>
                                <h6 className='align-middle'>Теги: <a href='#' className={s.link}>+</a></h6>
                            </div>
                        </div>
                        <div className='col-md-10 col-12 offset-md-2'>
                            <input type='text' placeholder='Ключевой результат' className={s.kr_input}/>
                            <div className={`${s.tags_container} ${s.box_shadow} mb-4`}>
                                <h6 className='align-middle'>Метрика: <a href='#' className={s.link}>+</a></h6>
                            </div>
                        </div>
                        <div className='col-md-10 col-12 offset-md-2'>
                            <input type='text' placeholder='Ключевой результат' className={s.kr_input}/>
                            <div className={`${s.tags_container} ${s.box_shadow} mb-4`}>
                                <h6 className='align-middle'>Метрика: <a href='#' className={s.link}>+</a></h6>
                            </div>
                        </div>

                        <div className='col-md-1 col-12 offset-md-2'>
                            <button className={`btn ${s.kr_btn}`}>+</button>
                        </div>

                        <div className='col-2 offset-md-5'>
                            <button className={`btn ${s.task_btn} offset-2`}>Сохранить</button>
                        </div>

                        </form>
                </div>
            </div>
        </div>
    )
}

export default EditTaskList;
