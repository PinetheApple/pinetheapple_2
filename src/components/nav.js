import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import {
    innerlinks, 
    button,  
    ham, 
    active, 
bar } from './styles/nav.module.css'
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

    const active_links=classNames(innerlinks,active)

    const active_ham=classNames(ham,active)

    return (
        <Pagelinks>
            <img src={logo} alt='logo'/>
            <ul className={toggle? active_links : innerlinks} onClick={handleToggle} role='navigation'>
                <li><Link to='/about' >About</Link></li>
                <li><Link to='/about#experience'>Experience</Link></li>
                <li><Link to='/#projects'>Projects</Link></li>
                <li><Link to='/#contact'>Contact</Link></li>
                <li><a href='/' className={button}>Resume</a></li>
            </ul>
            <div class={toggle? active_ham:ham} onClick={handleToggle} role='navigation'>
                <span class={bar}></span>
                <span class={bar}></span>
                <span class={bar}></span>
            </div>
        </Pagelinks>
    )
}