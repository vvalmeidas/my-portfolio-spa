import React from 'react'
import Button from '../common/button/Button'
import useWebAnimations, { backInUp, backInDown, bounceInLeft, bounceInRight, flipInX, flipOutX, flipInY } from "@wellyshen/use-web-animations";

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
                    <span className='title'>
                        @vvalmeidas
                    </span>
                </div>

                <hr className='separator' ref={refSepator1} />
                
                <div ref={refText}>
                    <p className='text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima totam voluptas ducimus, consequatur consectetur quidem quos? Exercitationem assumenda enim molestias voluptas maxime labore, quam animi. Praesentium voluptates quos qui laudantium.
                    </p>
                    <p className='text'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex itaque sed debitis cumque quo necessitatibus impedit obcaecati, culpa fuga error. Beatae quia, veritatis fugit ex cumque itaque molestias aliquam quibusdam.
                    </p>
                </div>

                <hr className='separator' ref={refSepator2} />

                <div ref={refButton}>
                    <Button className='button' />
                </div>

                
            </div>
        </div>
    )
}