import React, { Component } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
import '../NewsSlider/newsList.css'
import Button from './Button'
import CardInfo from './cardinfo'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class NewsList extends Component {
    state={
        items: [],
        teams:[],
        start:this.props.start,
        end: this.props.start + this.props.total,
        total:this.props.total
    }

    componentWillMount(){
        this.request(this.state.start,this.state.end);
    }

    request=(start,end)=>{
        if(this.state.teams.length<1){
            axios.get(`http://localhost:3004/teams`)
        .then((response)=>{
            this.setState({teams: response.data}) 
        })
    
        }
        axios.get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
        .then((response)=>{
            this.setState({items: [...this.state.items,...response.data]}) 
        })
    }

    loadMore=()=>{
        let end= this.state.end + this.state.total
        this.request(this.state.end,end)
    }

    renderNews=(type)=>{
        let template =null;
        switch(type){
            case('card'):
                template= this.state.items.map((item,i)=>{
                       return( 
                        <CSSTransition
                        classNames={{
                            enter: "newsList_wrapper",
                            enterActive:"newsList_wrapper_enter"
                        }}
                        timeout={500}
                        key={i}
                        >
                        <div>
                         <div className="newsList_item">
                            <Link to = {`articles/${item.id}`}> 
                                <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                <h2>{item.title}</h2>
                            </Link>
                         </div>
                        </div>
                        </CSSTransition>
                       )
                })
            break;

            default: template = null;
            
        
    }
    return template;
    }

   
    render() { 
        return (
            <div>
            <TransitionGroup component="div" className="list">
            {this.renderNews(this.props.type)}
            </TransitionGroup>
            <Button type="loadmore" loadMore={()=>this.loadMore()} cta="Load More News"/> 
            </div>
        )
    }
}

export default NewsList
