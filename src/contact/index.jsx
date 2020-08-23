import React, { Component } from 'react'
import './style.css'
import Sidebar from '../common/sidebar'
import useWebAnimations, { tada } from "@wellyshen/use-web-animations";

export default props => {
    const { ref } = useWebAnimations({ ...tada })
    
    return(
        <div className='contact'>
            <Sidebar className='contact_sidebar'/>
            <div className='contact_title'>
                <h1>Entre em contato!</h1>
                <hr className='contact_separator' />
                <h4>Vamos trabalhar juntos?</h4>
            </div>
            <form ref={ref} className='contact_form' action="">
                <div className='contact_field'>
                    <input type="text" placeholder='Nome' className='contact_input' />
                    <input type="email" placeholder='E-mail' className='contact_input'/>
                </div>
                <div className='contact_field'>
                    <input type="text" placeholder='Assunto' className='contact_input'/>
                </div>
                <div className='contact_field'>
                    <textarea placeholder='Mensagem' className='contact_input' name="" id=""></textarea>
                </div>
                <div className='contact_field'>
                    <button className='contact_button'>Enviar</button>
                </div>
            </form>
        </div>
    )
}