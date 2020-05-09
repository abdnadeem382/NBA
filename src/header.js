import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import SideNavigation from './sidenav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props)=> {

    const bars=()=>{
        return(
            <div className="barsDiv">
                <FontAwesomeIcon icon={faBars} size="lg"
                style={{
                    color:"white",
                    padding:'8px'
                }}
                onClick={props.onOpenNav}/>           
                 </div>
        )
    }
    const logo=()=>{
        return(
            <Link to='/' className="logo">
                <img alt = "nbaLogo" src="/images/nba_logo.png"/>
            </Link>
        )
    }

    return (
        <header className="header" >
            <SideNavigation {...props}/>
          <div className="headerOpt">
            {bars()}
            {logo()}
            
        </div>
        </header>
    )
}
export default Header;
