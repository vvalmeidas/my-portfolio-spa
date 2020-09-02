import React from 'react'
import './gallery.css'

import Item from './Item'
import Badge from '../common/badge/Badge'

import twitterPainel from '../assets/imgs/twitter-painel.png'
import gen from '../assets/imgs/gen.png'
import tecnoExpress from '../assets/imgs/tecnoexpress.png'
import videoDownloader from '../assets/imgs/video-downloader.jpg'


export default props => (
    <div className='gallery'>
        <div className='gallery_column'>
            <Item 
                className='gallery_item'
                title='Painel de Monitoramento - Twitter'
                subtext='Plataforma para acompanhar, por meio de estatísticas, temas e hashtags no twitter'
                image={ twitterPainel }
                link='https://twitterpainel.herokuapp.com/'
            >
                <Badge color='green' name="Node.js" />
                <Badge color='pink' name="Vue.js" />
                <Badge color='blue' name="EC2" />
            </Item>
            <Item 
                className='gallery_item'
                title='GEN'
                subtext='Jogo educacional para o aprendizado de língua inglesa por pessoas com deficiência visual'
                image={ gen }
            >
                <Badge color='green' name="Mobile" />
                <Badge color='pink' name="Phaser" />
                <Badge color='blue' name="Cordova" />
            </Item>
        </div>
        <div className='gallery_column'>
            <Item 
                className='gallery_item'
                title='Twitter Video Downloader'
                subtext='Bot para fazer download de vídeos do Twitter no Telegram.'
                link='https://t.me/vidownloader_bot'
                image={ videoDownloader }
            >
                <Badge color='green' name="Node.js" />
            </Item>
            <Item 
                className='gallery_item'
                title='TecnoExpress'
                subtext='Site feito para divulgação da empresa Tecnoexpress, possui também um blog e seção para gerenciamento de plantões de funcionários'
                link='http://www.tecnoexpress.com.br/'
                image={ tecnoExpress }
            >
                <Badge color='green' name="PHP" />
                <Badge color='pink' name="MySQL" />
            </Item>        
        </div>
    </div>
)