import React, { useState } from 'react'
import {Menu} from './styles' 
import {MdOutlineMenu,MdMenuOpen} from 'react-icons/md'

import { Link } from "react-router-dom";

export const MenuHamburger = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <Menu>
        <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
        <label htmlFor="menu-toggle" id="menu-icon">
            {menuOpen?<MdMenuOpen/>:<MdOutlineMenu />}
        </label>
            <div id="menu" className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre nós</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </div>
    </Menu>
  )
}
