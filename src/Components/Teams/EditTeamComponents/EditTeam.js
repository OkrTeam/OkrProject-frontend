import React, { useState } from "react";
import CustomNavbar from "../../CustomNavbar";
import DepartmentItem from "../DepartmentItem";
import '../teamsStyle.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/dropdown.js'
import {MultiSelect} from "react-multi-select-component";
import AddForm from "../AddForm";

function EditTeam() {

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [participants, setParticipants] = useState('')
    const [toggle, setToggle] = useState('')

    const [selected , setSelected] = useState([])
    const options = [
        { label: "Свободный участник1", value: "1" },
        { label: "Свободный участник2", value: "2" },
        { label: "Свободный участник3", value: "3" },
        { label: "Свободный участник4", value: "4" },
        { label: "Свободный участник5", value: "5" }
    ];
    const data = [{ label: "Свободный участник1", value: "1" }, { label: "Свободный участник2", value: "2" }]

    const overrideStrings = {
        "allItemsAreSelected": "Все участники выбраны.",
        "clearSearch": "Clear Search",
        "clearSelected": "Clear Selected",
        "noOptions": "No options",
        "search": "Поиск",
        "selectAll": "Выбрать всех",
        "selectAllFiltered": "Выбрать всех (по поиску)",
        "selectSomeItems": "Выберите участников",
        "create": "Create",
    }

    const [selectedFlavors, setSelectedFlavors] = useState([])

    function submitHandler(event) {
        event.preventDefault()
        //Создание команды
    }

    return(
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username'/>
            <div className="col-lg-8 offset-2">
                <form onSubmit={submitHandler}>
                    <input type='text' className='text-center form-item form-control margin-bottom' name='name'
                           onChange={event => setName(event.target.value)} placeholder='Выбранная команда'/>
                    <MultiSelect
                        options={options}
                        value={data}
                        onChange={setSelected}
                        labelledBy={"Выберите участников"}
                        overrideStrings={overrideStrings}
                        className="text-center"
                    />
                    <div>
                        <input type="submit" className="btn add-team-btn round" value="Сохранить"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTeam