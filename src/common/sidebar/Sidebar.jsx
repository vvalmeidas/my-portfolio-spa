import React, { useState } from 'react'
import './sidebar.css'
import { HomeOutlined, MailOutlined, DesktopOutlined } from '@ant-design/icons'
import useWebAnimations, { fadeInLeftBig } from "@wellyshen/use-web-animations";

export default props => {
    const { ref } = useWebAnimations({ ...fadeInLeftBig })

    return (
        <div className="sidebar" ref={ref}>
            <a href="#/" >
                <HomeOutlined className='item' />
            </a>
            <a href="#/projects" >
                <DesktopOutlined className='item' />
            </a>
            <a href="#/contact" >
                <MailOutlined className='item' />
            </a>
            
        </div>
    )
}
