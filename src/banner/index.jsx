import React from 'react'
import Button from '../common/button'
import useWebAnimations, { backInUp, backInDown, bounceInLeft, bounceInRight } from "@wellyshen/use-web-animations";

import './style.css'
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima totam voluptas ducimus, consequatur consectetur quidem quos? Exercitationem assumenda enim molestias voluptas maxime labore, quam animi. Praesentium voluptates quos qui laudantium.
                    </div>
                    <div className='text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima totam voluptas ducimus, consequatur consectetur quidem quos? Exercitationem assumenda enim molestias voluptas maxime labore, quam animi. Praesentium voluptates quos qui laudantium.
                    </div>
                </div>

                <hr className='separator' ref={refSepator2} />

                <div ref={refButton}>
                    <Button className='button' />
                </div>

                
            </div>
        </div>
    )
}