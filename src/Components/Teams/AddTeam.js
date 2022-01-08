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

const departments = [{ name: "Dodo Engineering", teams: [{ name: "Команда-1", participants: ["Власов Иосиф", "Громов Варлам", "Герасимов Остап", "Кондратьев Антон", "Никитин Остап"] }, { name: "Команда-2", participants: ["Грибоедов Михаил", "Алексеев Артем", "Гришин Кассиан", "Лихачёв Дональд", "Кузнецов Осип"] }, { name: "Команда-3", participants: ["Гаврилов Кондратий", "Беспалов Герасим", "Константинов Арнольд", "Якушев Карл", "Комаров Панкрат"] }] },
                     { name: "Dodo Development", teams: [{ name: "Команда-4", participants: ["Савельев Давид", "Горбачёв Любомир", "Антонов Юлиан", "Нестеров Семен", "Шестаков Григорий"] }, { name: "Команда-5", participants: ["Ситников Геннадий", "Самсонов Филипп", "Молчанов Филипп", "Мишин Родион", "Корнилов Игорь"] }, { name: "Команда-6", participants: ["Герасимов Адам", "Панфилов Павел", "Пестов Аввакум", "Николаев Анатолий", "Дорофеев Лазарь"] }] }
]

function AddTeam() {

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [participants, setParticipants] = useState('')

    const [selectedFlavors, setSelectedFlavors] = useState([]);

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



    return(
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username'/>
            <form onSubmit={submitHandler}>
                <input type='text' className='form-item form-control margin-bottom' name='name'
                       onChange={event => setName(event.target.value)} placeholder='Название команды'/>
                <input type='text' className='form-item form-control margin-bottom' name='name'
                       onChange={event => setName(event.target.value)} placeholder='Номер Команды'/>
                <select className="form-select form-control margin-bottom"  name='department'
                        onChange={event => setDepartment(event.target.value)}>
                    <option selected>Выберите подразделение</option>
                    <option value="1">Dodo Engineering</option>
                    <option value="2">Dodo 42</option>
                </select>
                <label>
                    Выберите участников
                    <select multiple={true} className="form-select form-control margin-bottom" value={participants}
                            onChange={(e)=> {handleSelect(e.target.selectedOptions)}}>
                        <option value="1"> Свободный участник1 </option>
                        <option value="2"> Свободный участник2 </option>
                        <option value="3"> Свободный участник3 </option>
                        <option value="4"> Свободный участник4 </option>
                        <option value="5"> Свободный участник5 </option>
                    </select>
                </label>
                <div className="">
                    <input type="submit" className="btn add-team-btn round" value="Создать"/>
                </div>
            </form>
        </div>
    )
}

export default AddTeam