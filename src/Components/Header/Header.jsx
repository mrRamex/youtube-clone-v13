import React, {useState, useEffect} from 'react'
import './Header.scss'

import thumbnail from '../../images/thumbnail/thumbnail2.jpg'
import { Link } from 'react-router-dom'
import { items1, items2, items3, items4, items5 } from './UserMenuItems'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsThreeDotsVertical, BsYoutube } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiVideoPlus } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RiVideoUploadFill } from 'react-icons/ri'
import { CiStreamOn } from 'react-icons/ci'
import { MdPostAdd } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'

const Header = () => {

    const [ showUploadVideo, setShowUploadVideo ] = useState(false)
    const [ showNotifications, setShowNotifactions ] = useState(false)
    const [ showUserMenu, setShowUserMenu ] = useState(false)

    const showDropdown = (choice) => {
        if (choice === 'Upload Video') {
            setShowUploadVideo(!showUploadVideo)
            setShowNotifactions(false)
            setShowUserMenu(false)
        } else if (choice === 'Notifactions') {
            setShowUploadVideo(false)
            setShowNotifactions(!showNotifications)
            setShowUserMenu(false)
        } else if (choice === 'User Menu') {
            setShowUploadVideo(false)
            setShowNotifactions(false)
            setShowUserMenu(!showUserMenu)
        }
    }

  return (
    <div className="header">
        <div className='header-menu'>
            <RxHamburgerMenu size={30}/>
            <div className='header-icon'>
                <BsYoutube color="red" size={30}/>
                <Link to="/" className="youtube-home">Youtube</Link>
            </div>
        </div>

        <div className='search-box'>
            <input placeholder="Search"/>
            <div className='icon-box'>
                <AiOutlineSearch size={25}/>
            </div>
        </div>

        <div className='personal-menu'>
            <BiVideoPlus size={25} color="grey" className='personal-icon' onClick={() => showDropdown('Upload Video')}/>
            <IoIosNotificationsOutline size={25} color='grey' className='personal-icon' onClick={() => showDropdown('Notifactions')}/>
            <div className='profile' onClick={() => showDropdown('User Menu')}></div>
        </div>

        <div className="dropdown-container">
            {showUploadVideo ? 
                <div className="upload-video" id="dropdown-div">
                    <div className='upload-video-item'>
                        <RiVideoUploadFill className='icon'/><p>Upload Video</p>
                    </div>
                    <div className='upload-video-item'>
                        <CiStreamOn className="icon"/><p>Go Live</p>
                    </div>
                    <div className='upload-video-item'>
                        <MdPostAdd className="icon"/><p>Create Post</p>
                    </div>
                </div>
            : <></>}

            {showNotifications ? 
                <div className="notifications" id="dropdown-div">
                    <div className="notification-header">
                        <p>Notification</p><IoIosSettings size={20} className="header-icon"/>
                    </div>
                    <div className="line"></div>
                    <div className="scroll-wrapper">
                        <div className="notification">
                            <div className="blue-dot"></div>
                            <div className='channel-icon'></div>
                            <div className="text-container">
                                <h4>Title</h4>
                                <p>Notification Content</p>
                            </div>
                            <img src={thumbnail} alt="Video thumbnail"/>
                            <BsThreeDotsVertical/>
                        </div>

                        <div className="notification">
                            <div className="blue-dot"></div>
                            <div className='channel-icon'></div>
                            <div className="text-container">
                                <h4>Title</h4>
                                <p>Notification Content</p>
                            </div>
                            <img src={thumbnail} alt="Video thumbnail"/>
                            <BsThreeDotsVertical/>
                        </div>

                        <div className="notification">
                            <div className="blue-dot"></div>
                            <div className='channel-icon'></div>
                            <div className="text-container">
                                <h4>Title</h4>
                                <p>Notification Content</p>
                            </div>
                            <img src={thumbnail} alt="Video thumbnail"/>
                            <BsThreeDotsVertical/>
                        </div>

                        <div className="notification">
                            <div className="blue-dot"></div>
                            <div className='channel-icon'></div>
                            <div className="text-container">
                                <h4>Title</h4>
                                <p>Notification Content</p>
                            </div>
                            <img src={thumbnail} alt="Video thumbnail"/>
                            <BsThreeDotsVertical/>
                        </div>
                        
                        <div className="notification">
                            <div className="blue-dot"></div>
                            <div className='channel-icon'></div>
                            <div className="text-container">
                                <h4>Title</h4>
                                <p>Notification Content</p>
                            </div>
                            <img src={thumbnail} alt="Video thumbnail"/>
                            <BsThreeDotsVertical/>
                        </div>
                    </div>
                </div>
            : <></>}

            {showUserMenu ? 
                <div className="user-menu" id="dropdown-div">
                    <div className='top-bar'>
                        <div className='channel-icon'></div>
                        <div className='user-menu-top-container'>
                            <p>Username</p>
                            <p>User tag</p>
                            <Link to='channel' className='channel-link'>View your channel</Link>
                        </div>
                    </div>

                    <div className='line'></div>

                    {items1.map((item) => (
                        <div className='user-menu-item' key={item.id}>
                            {item.icon}<p>{item.text}</p>
                        </div>
                    ))}

                    <div className='line'></div>

                    {items2.map((item) => (
                        <div className='user-menu-item' key={item.id}>
                            {item.icon}<p>{item.text}</p>
                        </div>
                    ))}

                    <div className='line'></div>

                    {items3.map((item) => (
                        <div className='user-menu-item' key={item.id}>
                            {item.icon}<p>{item.text}</p>
                        </div>
                    ))}

                    <div className='line'></div>

                    {items4.map((item) => (
                        <div className='user-menu-item'>
                            <div className='user-menu-item' key={item.id}>
                                {item.icon}<p>{item.text}</p>
                            </div>
                        </div> 
                    ))}

                    <div className='line'></div>

                    {items5.map((item) => (
                        <div className='user-menu-item'>
                            <div className='user-menu-item' key={item.id}>
                                {item.icon}<p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            : <></>}
        </div>
    </div>
  )
}

export default Header