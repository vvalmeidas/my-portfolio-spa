import React from 'react'
import './gallery.css'

import Item from './Item'

export default props => (
    <div className='gallery'>
        <div className='gallery_column'>
            <Item className='gallery_item' />
            <Item className='gallery_item' />
        </div>
        <div className='gallery_column'>
            <Item className='gallery_item' />
            <Item className='gallery_item' />
        </div>
    </div>
)