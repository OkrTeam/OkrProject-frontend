import React from "react";
import CustomNavbar from "../CustomNavbar";
import DepartmentItem from "./DepartmentItem";
import './teamsStyle.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/dropdown.js'
import AddForm from "./AddForm";

const departments = [{ name: "Dodo Engineering", teams: [{ name: "Команда-1", participants: ["Власов Иосиф", "Громов Варлам", "Герасимов Остап", "Кондратьев Антон", "Никитин Остап"] }, { name: "Команда-2", participants: ["Грибоедов Михаил", "Алексеев Артем", "Гришин Кассиан", "Лихачёв Дональд", "Кузнецов Осип"] }, { name: "Команда-3", participants: ["Гаврилов Кондратий", "Беспалов Герасим", "Константинов Арнольд", "Якушев Карл", "Комаров Панкрат"] }] },
                     { name: "Dodo Development", teams: [{ name: "Команда-4", participants: ["Савельев Давид", "Горбачёв Любомир", "Антонов Юлиан", "Нестеров Семен", "Шестаков Григорий"] }, { name: "Команда-5", participants: ["Ситников Геннадий", "Самсонов Филипп", "Молчанов Филипп", "Мишин Родион", "Корнилов Игорь"] }, { name: "Команда-6", participants: ["Герасимов Адам", "Панфилов Павел", "Пестов Аввакум", "Николаев Анатолий", "Дорофеев Лазарь"] }] }
]

function AddTeam() {
    return(
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username'/>
        </div>
    )
}

export default AddTeam