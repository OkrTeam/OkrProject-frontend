import React from 'react'
import s from '../Components/HomePage/home.module.css'

function PageNotFound() {
    return(
        <div className={s.text_center}>
            <h1>404</h1>
            <h3>Страница не найдена</h3>
        </div>
    )
}

export default PageNotFound
