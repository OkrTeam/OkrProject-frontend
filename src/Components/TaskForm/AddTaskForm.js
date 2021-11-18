import React from 'react';
import NewTask from "./Task";
import TargetList from "./Targets/Targets";
import CustomNavbar from "../CustomNavbar";

function AddTasks(props){
    return(
        <div>
            <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-12 mt-3'>
                        <NewTask/>
                    </div>
                    <div className='offset-md-1 col-md-5 col-12 mb-3 mt-3'>
                        <TargetList title='Цели команды'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTasks
