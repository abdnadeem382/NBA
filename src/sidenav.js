import React from 'react'
import SideNav from 'react-simple-sidenav'
import NavOptions from './navOptions'

const SideNavigation = (props)=> {
    return (
        <div>
            <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            onOpenNav={props.onOpenNav}
            navStyle={{
                background:"rgb(38, 48, 65)",
                maxWidth:'220px'
            }}
            >
            <NavOptions></NavOptions>
            </SideNav>
        </div>
    )
}
export default SideNavigation;
