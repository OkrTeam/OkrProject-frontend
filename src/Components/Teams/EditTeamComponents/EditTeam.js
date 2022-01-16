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

    const [selected , setSelected] = useState(getTeamMembers())

    function getTeamMembers () {
        const teamMembers = JSON.parse(localStorage.getItem('members'))
        const teamMembersList = teamMembers.map((member,index)=>{return {label: member.name,value: index}}
        )
        console.log(teamMembersList)
        return teamMembersList;
    };

    const options = [
        { label: "Алексей Попов", value: "1" },
        { label: "Виталий Сергеев", value: "2" },
        { label: "Артем Матвеев", value: "3" },
        { label: "Александр Савченко", value: "4" },
        { label: "Иван Колыганов", value: "5" },
        { label: "Кирилл Михалев", value: "6" }
    ];
    const data = [{ label: "Свободный участник1", value: "1" }, { label: "Свободный участник2", value: "2" }]

    const teamName = localStorage.getItem('name')

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
                    {/*<input type='text' className='text-center form-item form-control margin-bottom' name='name'*/}
                    {/*       onChange={event => setName(event.target.value)} placeholder='Выбранная команда'/>*/}
                    <div className='text-center form-item form-control margin-bottom'>
                        {teamName}
                    </div>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy={"Выберите участников"}
                        overrideStrings={overrideStrings}
                        className="text-center"
                    />
                    {/*onClick={localStorage.setItem('members',JSON.stringify(setSelected))}*/}
                    <div >
                        <input type="submit" className="btn add-team-btn round" value="Сохранить"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTeam