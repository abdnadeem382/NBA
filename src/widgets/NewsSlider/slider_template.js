import React from 'react'
import Slick from 'react-slick'
import {Link} from 'react-router-dom'

const SliderTemplate = (props)=> {
    let template= null;

    const settings={
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings,
        
    }

    switch(props.type){
        case('home'):
            template= props.data.map((item,i)=>{
                return(
                    <div key={i}>
                        <div className="slideItem">
                            <div className="slideImg" style={{
                                background:`url(../images/articles/${item.image})`
                            }}>

                            </div>
                            <div>
                            <Link className="slideLink" to={`/articles/${item.id}`}>
                                {item.title}
                            </Link>
                            </div>
                        </div>
                    </div>
                )
            })

        break;
        default: template=null;
    }
    return (
        <div>
            <Slick {...settings}>
             {template}
            </Slick>
        </div>
    )
}
export default SliderTemplate;
