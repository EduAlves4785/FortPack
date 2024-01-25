import React from 'react'
import {Nav} from './styles'
import { MdFactory } from "react-icons/md";
import {MenuHamburger} from '../MenuH/index'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Nav>
        <div className='nav-logo'>
          <Link to='/'>
            <MdFactory fontSize={40} color='#e36414'/>
            <h1>FortPack</h1>
          </Link>
        </div>
        <div className="itens-nav">
            <Link to="/FortPack">Home</Link>
            <Link to="/FortPack/sobre">Sobre nós</Link>
            <Link to="/FortPack/clientes">Clientes</Link>
            <Link to="/FortPack/contato">Contato</Link>
        </div>
        <MenuHamburger/>
    </Nav>
  )
}
