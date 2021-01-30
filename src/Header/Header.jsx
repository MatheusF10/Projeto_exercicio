import React from 'react'
import './Header.css'
import { useState } from 'react'
import * as Icon from 'react-feather'

export default () => {
    const [showMenu, setShowMenu] = useState(false)
    let responsiveMenu
    
   
    
    if(showMenu){
        responsiveMenu = 
                <ul className="itens-responsive">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Contact</a></li>
                <button><Icon.ShoppingCart color={'white'} size={12}></Icon.ShoppingCart></button>
                    
                </ul>
       
        }      
    return(
        <>
        <div id="header">
         <a href="#"><h1>A C M E</h1></a>

         <input type="checkbox" id="checkbox-menu" onClick={() => setShowMenu(!showMenu)}/>
            <label htmlFor="checkbox-menu">
               <span></span>
               <span></span>
               <span></span>
            </label>

            <ul id="itens">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Contact</a></li>
                <button><Icon.ShoppingCart color={'white'} size={12}></Icon.ShoppingCart></button>
            </ul>
        </div>
        {responsiveMenu}
        </>
    )
}