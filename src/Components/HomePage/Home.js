import React from 'react'
import s from './home.module.css'
import Rating from "./RatingTable/RatingTable";
import HomeTargetList from "./HomeTargetList/HomeTargetList";
import ConnectedOKR from "./ConnectedOKR/ConnectedOKR";
import CustomNavbar from "../CustomNavbar";
import goalArray from '../data/data';


function HomePage() {
    return(
       <div>
         <CustomNavbar brand='Dodo OKR' myOKR='Мой OKR' teams='Команды' username='Username'/>
         <div className='container'>
              <div className='row'>
                <div className={`${s.margin_bottom} col-md-3 col-12`}>
                    <ConnectedOKR />
                </div>
                <div className={`${s.margin_bottom} col-md-6 col-12 `}>
                    <div className={s.card_title}>
                      <h3>Твои цели</h3>
                    </div>
                    <HomeTargetList goalArray={goalArray} />
                </div>
                <div className={`${s.margin_bottom} col-md-3 col-12`}>
                    <Rating />
                </div>
              </div>
           </div>
        </div>
    )
}

export default HomePage