import React, { useState } from 'react'
import './item.css'


export default props => {
    const [isHover, setIsHover] = useState(false)
    var hoverState = `${isHover ? '--state-hover' : ''}`

    return (
        <div 
            className='item'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img
                className={`item_img${hoverState}`} 
                src={ props.image || '' } 
                alt={ props.name || '' }
                width='330'
                height='195'
            />
            <div className={`item_description${hoverState}`}>
                <figcaption className='item_text'>
                    { props.title || '' }
                </figcaption>
                <figcaption className='item_subtext'>
                    { props.subtext || '' }
                </figcaption>
                <div className='item_technologies'>
                    {props.children || ''}
                </div>
                { props.link ?
                    <button className='item_button'>
                        <a href={props.link || ''}>
                            Conheça
                        </a>
                    </button>
                : '' }
                
            </div>
        </div>

    )
}