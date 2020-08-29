import React, { useState } from 'react'
import './item.css'

import Badge from '../common/badge/Badge'

export default props => {
    const [isHidden, setIsHidden] = useState(true)
    var descriptionClass = `item_description ${isHidden ? 'item_description--visibility-hidden' : ''}`

    return (
        <div 
            className='item'
            onMouseEnter={() => setIsHidden(false)}
            onMouseLeave={() => setIsHidden(true)}
        >
            <img
                className='item_img' 
                src={ 'http://vvalmeidas.herokuapp.com/static/faf2c6c0e4171ac56363d5fb1bcf4f28/e6f84/project.png' } 
                alt={ props.name || '' }
                width='330'
                height='195'
            />
            <div className={ descriptionClass }>
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
            </div>
        </div>

    )
}