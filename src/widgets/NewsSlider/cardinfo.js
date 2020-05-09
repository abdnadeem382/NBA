import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const CardInfo= (props) =>{
    const teamName=(teams,team)=>{
        let data = teams.find((item)=>{
            return item.id===team;
        })
        if(data) return data.name
    }
    return (
        <div className="cardInfo">
            <span className="team">
                {teamName(props.teams,props.team)}
            </span>
            <span className="date">
            <FontAwesomeIcon icon={faClock}/>
                {props.date}
            </span>
        </div>
    )
}

export default CardInfo;
