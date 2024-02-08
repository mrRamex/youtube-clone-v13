import React from 'react'
import './MainPage.scss'
import thumbnail from '../../images/thumbnail/thumbnail.jpg'
import { PiFilmReel } from 'react-icons/pi'
import { content1, content2 } from './content_container'
import { shorts_container } from './shorts_items'
import './Shorts.scss'

const MainPage = () => {
  return (
    <div className="main-page">
        <div className='videos-container'>
            {content1.map((video) => (
                <div className='video-container' key={video.id}>
                    <img src={video.thumbnail} alt="thumbnail"/>
                    <div className='video-credentails'>
                        <div className='channel-icon'></div>
                        <div className="credentails">
                            <h3>{video.title}</h3>
                            <p>{video.channel_name}</p>
                            <p>{video.views}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>

        <div className='videos-container'>
            {content2.map((video) => (
                <div className='video-container' key={video.id}>
                    <img src={video.thumbnail} alt="thumbnail"/>
                    <div className='video-credentails'>
                        <div className='channel-icon'></div>
                        <div className="credentails">
                            <h3>{video.title}</h3>
                            <p>{video.channel_name}</p>
                            <p>{video.views}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
        <div className='main-header'>
            <PiFilmReel size={30} color="red"/><h2>Shorts</h2>
        </div>

        <div className="shorts">
            {shorts_container.map((short) => (
                <div className='short'>
                    <img src={short.thumbnail} alt="thumbnail"/>
                    <h4>{short.title}</h4>
                    <p>{short.views}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MainPage