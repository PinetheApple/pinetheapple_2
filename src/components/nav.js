import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import {
    innerlinks, 
    button,  
    ham, 
    active, 
    bar 
} from './styles/nav.module.css'
import logo from '../images/logo.png'
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

const Logo=styled.div`
    margin-left: 2rem;
    padding: 1rem 0.5rem;
    margin-bottom: -0.5rem;
    box-sizing: content-box;

    @media (max-width: 850px){
        margin-left:0;
    }
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
            <Logo>
                <a href='/'><img src={logo} alt='logo' height="36px" width="35px"/></a>
            </Logo>
            <ul className={toggle? active_links : innerlinks} onClick={handleToggle} role='navigation'>
                <li><Link to='/about' >About</Link></li>
                <li><Link to='/about#experience'>Experience</Link></li>
                <li><Link to='/#projects'>Projects</Link></li>
                <li><Link to='/#contact'>Contact</Link></li>
                <li><a href='https://www.dropbox.com/s/j7rq8jbu6dgkftg/pine_resume.pdf?dl=1' className={button} download="jonathan_resume">Resume</a></li>
            </ul>
            <div className={toggle? active_ham:ham} onClick={handleToggle} role='navigation'>
                <span className={bar}></span>
                <span className={bar}></span>
                <span className={bar}></span>
            </div>
        </Pagelinks>
    )
}