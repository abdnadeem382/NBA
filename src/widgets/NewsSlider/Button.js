import React from 'react'
import {Link} from 'react-router-dom'
import '../NewsSlider/newsList.css'

const Button = (props)=> {
    let template=null;
    switch(props.type){
        case('loadmore'):
            template= (
                <div className="blue-btn" onClick={props.loadMore}>{props.cta}</div>
            )
            
        break;

        case('linkTo'):
            template=(
                <Link to ={props.linkTo} className="video-btn">{props.cta}</Link>
            )
            break;
        default: template=null;
    }
    return template;
}
export default Button;
