import React, { useState } from 'react'
import './style.css'
import { HomeOutlined, MailOutlined, DesktopOutlined, DatabaseFilled } from '@ant-design/icons'
import useWebAnimations, { fadeInLeftBig } from "@wellyshen/use-web-animations";

export default props => {
    const { ref } = useWebAnimations({ ...fadeInLeftBig })

    return (
        <div className='sidebar-wrapper'>
            <nav className='sidebar'>
                <ul className='sidebar__list'>
                    <li className='sidebar__item'>
                        <a href="#/" >
                            <HomeOutlined className='sidebar__icon' />
                        </a>
                    </li>
                    <li className='sidebar__item'>
                        <a href="#/projects" >
                            <DesktopOutlined className='sidebar__icon' />
                        </a>
                    </li>
                    <li className='sidebar__item'>
                        <a href="#/contact" >
                            <MailOutlined className='sidebar__icon' />
                        </a>
                    </li>
                </ul>   
            </nav>
        </div>
    )
}
