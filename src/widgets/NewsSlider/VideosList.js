import React, { Component } from 'react'
import Button from './Button'
import '../NewsSlider/newsList.css'

class VideosList extends Component {
    state={
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start+this.props.total,
        total: this.props.total
    }

    renderTitle=()=>{
        return this.props.title ? <h3><strong>NBA</strong> Videos</h3>: null
    }
    renderButton=()=>{
        return this.props.loadmore ? "loadmore" : <Button type="linkTo" cta="More Videos" linkTo="/vidoes"/>
    }

    render() {
        return (
            <div className="videoList_wrapper">
                {this.renderTitle()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideosList;
