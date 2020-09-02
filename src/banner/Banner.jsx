import React from 'react'
import useWebAnimations, { backInUp, backInDown, bounceInLeft, bounceInRight } from "@wellyshen/use-web-animations";
import { AiOutlineArrowDown } from 'react-icons/ai'
import './banner.css'
import icon from '../assets/imgs/icon.jpg'

export default props => {
    const refHeader = useWebAnimations({ ...backInDown }).ref;
    const refSepator1 = useWebAnimations({ ...bounceInLeft }).ref;
    const refSepator2 = useWebAnimations({ ...bounceInLeft }).ref;
    const refText = useWebAnimations({ ...bounceInRight }).ref;
    const refButton = useWebAnimations({ ...backInUp }).ref;
    
    return (
        <div className='banner-wrapper'>
            <div className='about'>
                <div className='target' ref={refHeader}>
                    <div className='icon-wrapper'>
                        <img src={icon} className='icon'/>
                    </div>
                    <div className='title'>
                        @vvalmeidas
                    </div>
                </div>

                <hr className='separator' ref={refSepator1} />



                
                <div ref={refText}>
                    <div className='text'>
                        Sou desenvolvedor e atualmente estou cursando Engenharia de Computação na Universidade Estadual de Feira de Santana (UEFS). Já ocupei os cargos de membro consultor e diretor de projetos na Empresa Júnior de Engenharia de Computação da UEFS (Ecomp Jr), onde gerenciei e participei do desenvolvimento de sistemas web e mobile.
                    </div>
                    <div className='text'>
                        sAtualmente participo de um projeto de iniciação científica, com bolsa da FAPESB, no qual desenvolvo um jogo mobile para o aprendizado de inglês com foco em pessoas com deficiência visual.
                    </div>
                </div>

                <hr className='separator' ref={refSepator2} />

                <div ref={refButton}>
                    <button className='button_banner'>
                        <a href="#/projects">
                            <AiOutlineArrowDown size="2em" /> 
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}