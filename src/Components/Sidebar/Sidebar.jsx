import React from 'react'
import './Sidebar.scss'

import { container1 } from './Sidebar_container1'
import { containerHeader } from './Sidebar_container_header'
import { subContainer } from './Sidebar_subscription_container'
import { container2 } from './Sidebar_container2'
import { AiFillHome, AiOutlineFire} from 'react-icons/ai'
import { PifilmReel } from 'react-icons/pi'
import { MdOutlineSubscription, MdArrowForwardIos, MdManageHistory, MdOutlineFeedback } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiSolidVideos, BiTimeFive, BiLike, BiMoviePlay, BiNews, BiHelpCircle } from 'react-icons/bi'
import { BsTrophy } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'

const Sidebar = () => {
  return (
    <div className="sidebar">
        {container1.map((item) => (
            <div className='sidebar-container' key={item.id}>
                {item.icon }<p>{item.name}</p>
            </div>
        ))}
        <div className="line"></div>
        <div className="sidebar-container-header">
            <p>You</p><MdArrowForwardIos size={16}/>
        </div>
        {containerHeader.map((item) => (
            <div className="sidebar-container" key={item.id}>
                {item.icon}<p>{item.name}</p>
            </div>
        ))}
        <div className="line"></div>
        <div className="sidebar-container-header">
            <p>Subscriptions</p>
        </div>
        {subContainer.map((item) => (
            <div className="subscription-container" key={item.id}>
                <div className="sub-profile"></div>
                <p>{item.name}</p>
                <div className='blue-dot'></div>
            </div>
        ))}
        <div className="line"></div>
        <div className="sidebar-container">
            <p>Explore</p>
        </div>
        {container2.map((item) => (
            <div className="sidebar-container" key={item.id}>
                {item.icon}<p>{item.name}</p>
            </div>
        ))}


    </div>
  )
}

export default Sidebar