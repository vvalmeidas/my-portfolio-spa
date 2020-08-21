import React from 'react'
import './button.css'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default props => {
    return (
        <div>
            <button className='button'>
                <AiOutlineArrowDown size="2em" /> 
            </button>
        </div>   
    )
}