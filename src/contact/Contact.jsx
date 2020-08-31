import React, { useState } from 'react'
import './contact.css'
import useWebAnimations, { tada } from "@wellyshen/use-web-animations";
import EmailJs from 'emailjs-com'

import Sidebar from '../common/sidebar/Sidebar'

export default props => {
    const { ref } = useWebAnimations({ ...tada })
    const [ data, setData ] = useState({
        name: 'Nome',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Mensagem'
    })

    const handleName = (e) => {
        setData({ ...data, name: e.target.value })
    }

    const handleEmail = (e) => {
        setData({ ...data, email: e.target.value })
    }

    const handleSubject = (e) => {
        setData({ ...data, subject: e.target.value })
    }

    const handleMessage = (e) => {
        setData({ ...data, subject: e.target.value })
    }
    
    const handleSubmit = (e) => {
        EmailJs.send('gmail', 'template_4e0SmNkK', data, 'user_6sPsHsR5r64fhIxxI03BW')
        .then((result) => {
            setData({
                name: 'Nome',
                email: 'E-mail',
                subject: 'Assunto',
                message: 'Mensagem'
            })
        }, (error) => {
            console.log(error)
        } )
    }


    return(
        <div className='contact'>
            <Sidebar className='contact_sidebar'/>
            <div className='contact_title'>
                <h1>Entre em contato!</h1>
                <hr className='contact_separator' />
                <h4>Vamos trabalhar juntos?</h4>
            </div>
            <form ref={ref} className='contact_form' onSubmit={ handleSubmit }>
                <div className='contact_field'>
                    <input type="text" placeholder={ data.name } className='contact_input' onChange={ handleName } />
                    <input type="email" placeholder={ data.email } className='contact_input' onChange={ handleEmail } />
                </div>
                <div className='contact_field'>
                    <input type="text" placeholder={ data.subject } className='contact_input' onChange={ handleSubject }/>
                </div>
                <div className='contact_field'>
                    <textarea placeholder={ data.message } className='contact_input' onChange={ handleMessage }></textarea>
                </div>
                <div className='contact_field'>
                    <button className='contact_button'>Enviar</button>
                </div>
            </form>
        </div>
    )
}