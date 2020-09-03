import React from 'react'
import './projects.css'
import useWebAnimations, { backInDown } from "@wellyshen/use-web-animations";

import Sidebar from '../common/sidebar/Sidebar'
import Gallery from './Gallery'

export default props => {
    const projectsAnimation = useWebAnimations({ ...backInDown }).ref

    return (
        <div className='projects'>
            <Sidebar className='projects_sidebar' />
            <div ref={ projectsAnimation } className='projects_gallery'>
                <h1 className='projects_title'>Projetos</h1>
                <Gallery />
            </div>
        </div>
    )
}

