import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import './App.css'

class Layout extends Component {
    state={
        showNav: false
    }
    toggleSidenav=(action)=>{
        this.setState({showNav:!this.state.showNav})
    }

    render() {
        return (
            <div>
            <Header showNav= {this.state.showNav}
                onHideNav={()=>this.toggleSidenav()}
                onOpenNav={()=>this.toggleSidenav()}
            
            />
            {this.props.children}<br/>
            <Footer/>
            </div>
        )
    }
}
export default Layout