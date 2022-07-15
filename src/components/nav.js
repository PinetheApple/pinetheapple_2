import * as React from 'react'
import { Link } from 'gatsby'
import {innerlinks, button, dropdown, bars} from './styles/nav.module.css'

export default function Nav(){
    return (
        <>
            <ul className={innerlinks}>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about#experience'>Experience</Link></li>
                <li><Link to='/#projects'>Projects</Link></li>
                <li><Link to='/#contact'>Contact</Link></li>
                <li><a href='/' className={button}>Resume</a></li>
            </ul>
            <div className={dropdown}>
                <div className={bars}></div>
                <div className={bars}></div>
                <div className={bars}></div>
            </div>
        </>
    )
}