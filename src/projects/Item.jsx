import React, { useState } from 'react'
import './item.css'

import Badge from '../common/badge/Badge'

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
                src={ 'http://vvalmeidas.herokuapp.com/static/faf2c6c0e4171ac56363d5fb1bcf4f28/e6f84/project.png' } 
                alt={ props.name || '' }
                width='330'
                height='195'
            />
            <div className={`item_description${hoverState}`}>
                <figcaption className='item_text'>
                    Painel de Monitoramento - Twitter
                </figcaption>
                <figcaption className='item_subtext'>
                    Plataforma para acompanhar, por meio de estatísticas, temas e hashtags no twitter. 
                </figcaption>
                <div className='item_technologies'>
                    <Badge color='green' name="Node.js" />
                    <Badge color='pink' name="Vue.js" />
                    <Badge color='blue' name="EC2" />
                </div>
                <button className='item_button'>
                    <a href="#/projects">
                        Conheça
                    </a>
                </button>
            </div>
        </div>

    )
}