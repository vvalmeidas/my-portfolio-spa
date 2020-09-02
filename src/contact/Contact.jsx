import React, { useState } from 'react'
import './contact.css'
import useWebAnimations, { backInDown } from "@wellyshen/use-web-animations";
import EmailJs from 'emailjs-com'

import Sidebar from '../common/sidebar/Sidebar'

export default props => {
    const formAnimation = useWebAnimations({ ...backInDown }).ref
    const [ data, setData ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
        setData({ ...data, message: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        EmailJs.send('gmail', 'template_4e0SmNkK', data, 'user_6sPsHsR5r64fhIxxI03BW')
        .then((result) => {
            setData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }, (error) => {
            console.log(error)
        } )
    }

    return (
        <div className='contact'>
            <Sidebar className='contact_sidebar'/>
            <form ref={ formAnimation } className='contact_form' onSubmit={ handleSubmit }>
                <div className='contact_title'>
                    <h1>Entre em contato!</h1>
                    <hr className='contact_separator' />
                    <h4>Vamos trabalhar juntos?</h4>
                </div>
                <div className='contact_field'>
                    <input type="text" placeholder='Nome' className='contact_input' value={ data.name } onChange={ handleName } />
                    <input type="email" placeholder='E-mail' className='contact_input' value={ data.email } onChange={ handleEmail } />
                </div>
                <div className='contact_field'>
                    <input type="text" placeholder='Assunto' className='contact_input' value={ data.subject } onChange={ handleSubject }/>
                </div>
                <div className='contact_field'>
                    <textarea placeholder='Mensagem' className='contact_input' value={ data.message } onChange={ handleMessage }></textarea>
                </div>
                <div className='contact_field'>
                    <button className='contact_button'>Enviar</button>
                </div>
            </form>
        </div>
    )
}