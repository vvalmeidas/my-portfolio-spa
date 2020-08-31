import React from 'react'
import './badge.css'

export default props => {
    const COLORS = {
        'green': '#08A045',
        'pink': '#FD0D55',
        'blue': '#087E8B',
    }
    const backgroundColor = props.color ? COLORS[props.color] : COLORS['blue']

    return(
        <div style={{ backgroundColor }} className='badge'>
            <p className='badge_text'>{ props.name }</p>
        </div>
    )
}