import React from 'react'
import './projects.css'

import Sidebar from '../common/sidebar/Sidebar'
import Gallery from './Gallery'

export default props => (
    <div className='projects'>
        <Sidebar className='projects_sidebar' />
        <div className='projects_gallery'>
            <Gallery />
        </div>
    </div>
)