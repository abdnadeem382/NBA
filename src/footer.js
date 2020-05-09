import React from 'react'

const Footer = ()=> {
    const year =  (new Date()).getFullYear();
    return (
        <div className="footer">
            <img alt = "nbaLogo" src="/images/nba_logo.png"/>
            <div>@NBA {year} all rights reserved</div>
        </div>
    )
}
export default Footer;
