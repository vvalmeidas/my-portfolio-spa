import React from 'react'
import './style.css'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default props => {
    return (
        <div>
            <button className='button'>
                <a href="#/projects"><AiOutlineArrowDown size="2em" /> </a>
            </button>
        </div>   
    )
}