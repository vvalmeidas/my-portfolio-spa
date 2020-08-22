import React, { Component } from 'react'
import './contact.css'
import Sidebar from '../common/sidebar/Sidebar'
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";

export default props => {
    const { ref } = useWebAnimations({ ...heartBeat })
    
    return(
        <div className='wrapper'>
            <Sidebar className='sidebar'></Sidebar>            
            <form ref={ref} className='form_wrapper' action="">
                <div className='form_group'>
                    <input type="text" placeholder='Nome' className='name form_control' />
                    <input type="email" placeholder='E-mail' className='email form_control'/>
                </div>
                <div className='form_group'>
                    <input type="text" placeholder='Assunto' className='subject form_control'/>
                </div>
                <div className='form_group'>
                    <textarea placeholder='Mensagem' className='message form_control' name="" id=""></textarea>
                </div>
            </form>
        </div>
    )
}