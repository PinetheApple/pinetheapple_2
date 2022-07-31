import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import {innerlinks, button, toggle_icon, closed} from './styles/nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav(){

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <ul className={toggle? innerlinks : closed}>
                <li><Link to='/about'>About</Link></li>
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
        </>
    )
}