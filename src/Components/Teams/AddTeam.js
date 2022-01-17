import React, { useState } from "react";
import CustomNavbar from "../CustomNavbar";
import DepartmentItem from "./DepartmentItem";
import './teamsStyle.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/dropdown.js'
import AddForm from "./AddForm";
import freeParticipants from '../data/freeParticipants'
import {MultiSelect} from "react-multi-select-component";
import s from './teamsStyle.css'

const departments = [{ name: "Dodo Engineering", teams: [{ name: "Команда-1", participants: ["Власов Иосиф", "Громов Варлам", "Герасимов Остап", "Кондратьев Антон", "Никитин Остап"] }, { name: "Команда-2", participants: ["Грибоедов Михаил", "Алексеев Артем", "Гришин Кассиан", "Лихачёв Дональд", "Кузнецов Осип"] }, { name: "Команда-3", participants: ["Гаврилов Кондратий", "Беспалов Герасим", "Константинов Арнольд", "Якушев Карл", "Комаров Панкрат"] }] },
                     { name: "Dodo Development", teams: [{ name: "Команда-4", participants: ["Савельев Давид", "Горбачёв Любомир", "Антонов Юлиан", "Нестеров Семен", "Шестаков Григорий"] }, { name: "Команда-5", participants: ["Ситников Геннадий", "Самсонов Филипп", "Молчанов Филипп", "Мишин Родион", "Корнилов Игорь"] }, { name: "Команда-6", participants: ["Герасимов Адам", "Панфилов Павел", "Пестов Аввакум", "Николаев Анатолий", "Дорофеев Лазарь"] }] }
]

function AddTeam() {

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [participants, setParticipants] = useState('')
    const [toggle, setToggle] = useState('')

    const [selected, setSelected] = useState([])
    const options = [
        { label: "Алексей Попов", value: "1" },
        { label: "Виталий Сергеев", value: "2" },
        { label: "Артем Матвеев", value: "3" },
        { label: "Александр Савченко", value: "4" },
        { label: "Вася Пупкин", value: "5" },
        { label: "Кирилл Михалев", value: "6" }
    ];

    const [selectedTeams, setSelectedTeams] = useState([])
    const teams = [
        { label: "Team 1", value: "1" },
        { label: "Team 2", value: "2" },
        { label: "Team 3", value: "3" },
        { label: "Team 4", value: "4" },
        { label: "Team 5", value: "5" },
        { label: "Team 6", value: "6" }
    ];


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

    const handleSelect = function(selectedItems) {
        const members = [];
        for (let i=0; i<selectedItems.length; i++) {
            members.push(selectedItems[i].value);
        }
        setParticipants(members);
    }
    
    // participants = freeParticipants.map((participant)=>
    //     <li key={participant.name.toString()}>
    //         {participant}
    //     </li>
    // )

    function submitHandler(event) {
        event.preventDefault()
        //Создание команды
    }

    const handleToggle = ({ target }) =>
        setToggle(s => ({ toggle, [target.name]: !toggle[target.name] }));


    return(
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username'/>
            <div className="col-lg-8 offset-2">
                <form onSubmit={submitHandler}>
                    <input type='text' className='text-center form-item form-control margin-bottom' name='name'
                           onChange={event => setName(event.target.value)} placeholder='Название команды     '/>
                    <select className="text-center form-select form-control margin-bottom"  name='department'
                            onChange={event => setDepartment(event.target.value)}>
                        <option selected>Выберите Родительскую команду</option>
                        <option value="1">Team 1</option>
                        <option value="2">Team 2</option>
                        <option value="2">Team 3</option>
                    </select>
                    {/*<MultiSelect*/}
                    {/*    options={teams}*/}
                    {/*    value={selectedTeams}*/}
                    {/*    onChange={setSelectedTeams}*/}
                    {/*    labelledBy={"Выберите родительскую команду"}*/}
                    {/*    overrideStrings={overrideStrings}*/}
                    {/*    className="text-center margin-bottom"*/}
                    {/*/>*/}
                        <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy={"Выберите участников"}
                                overrideStrings={overrideStrings}
                                className="text-center"
                        />
                    <div>
                        <input type="submit" className="btn add-team-btn round" value="Создать"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTeam