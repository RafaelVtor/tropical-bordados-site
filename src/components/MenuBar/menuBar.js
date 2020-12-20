import React from 'react'
import logo from '../../images/logo-tropical-1.png'

export default function MenuBar() {
    return (
        <div>
            <div className='menu-bar'>                
                <img src={logo} ></img>
                <ul className='menu-list'>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#contato">Contato</a></li>              
                </ul>
            </div>
        </div>
    )
}
