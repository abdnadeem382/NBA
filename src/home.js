import React from 'react'
import NewsSlider from './widgets/NewsSlider/slider'
import NewsList from './widgets/NewsSlider/newsList'
import VideosList from './widgets/NewsSlider/VideosList'
const Home = ()=> {
    return (
        <div>
            <NewsSlider type="home" start={0} end={3} settings={{dots:false}}/>
            <NewsList type="card" start={0} total={3} loadmore={true}></NewsList>
            <VideosList type ="card" start={0} total={3} loadmore={false} title={true}/>
        </div>
    )
}
export default Home;
