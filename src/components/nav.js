import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import {innerlinks, expanded, button, toggle_icon} from './styles/nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.svg'
import styled from "styled-components"

const Pagelinks= styled.nav`
    display:flex;
    justify-content: space-between;
    padding: 2rem;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--c2);
    z-index: 10;
`

export default function Nav(){

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const expanded_links=classNames(innerlinks, expanded)

    return (
        <Pagelinks>
            <img src={logo} alt='logo'/>
            <ul className={toggle? expanded_links : innerlinks} onClick={handleToggle}>
                <li><Link to='/about' >About</Link></li>
                <li><Link to='/about#experience'>Experience</Link></li>
                <li><Link to='/#projects'>Projects</Link></li>
                <li><Link to='/#contact'>Contact</Link></li>
                <li><a href='/' className={button}>Resume</a></li>
            </ul>
            <button style={{padding: '0', border: 'none', background: 'inherit'}} className={toggle_icon} onClick={handleToggle}>
                {toggle? 
                <FontAwesomeIcon icon={'x'} style={{color: '#80898C'}} title='toggle close icon' size='2xl'/> : 
                <FontAwesomeIcon icon={'bars'} style={{color: '#80898C'}} title='toggle open icon' size='2xl'/>}
            </button>
        </Pagelinks>
    )
}