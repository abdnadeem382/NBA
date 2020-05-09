import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faSignInAlt, faSignOutAlt, faVideo } from '@fortawesome/free-solid-svg-icons'
import './App.css'

const NavOptions = ()=> {
   const options = [
        {
        type:"navoptions", 
        text:"Home",
        icon:faHome,
        link:"/"
        },

        {
        type:"navoptions", 
        text:"News",
        icon:faNewspaper,
        link:"/news"
            },
        
        {
        type:"navoptions", 
        text:"Videos",
        icon:faVideo,
        link:"/videos"
        },
        
        {
        type:"navoptions", 
        text:"Sign In",
        icon:faSignInAlt,
        link:"/signin"
        },
        {
        type:"navoptions", 
        text:"Sign Out",
        icon:faSignOutAlt,
        link:"/signout"
        }
    ]

    const showOptions=()=>{
       return options.map((option,index)=>{
            return(
            <div key={index} 
            className={option.type}>
            <Link to={option.link}>
            <FontAwesomeIcon icon={option.icon} pull= "left"/>
            {option.text}</Link>
            </div>
            )
        })
    }


    return (
        <div>
            {showOptions()}
        </div>
    )
    }
export default NavOptions;
