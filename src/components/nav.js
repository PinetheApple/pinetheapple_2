import * as React from 'react'
import {Link, StaticImage} from 'gatsby'
import {pagelinks, innerlinks, button} from './css/nav.module.css'

export default function Nav(){
    return (
        <nav class={pagelinks}>
            {/* <Link to='/'><StaticImage alt="Logo" src="../images/logo.svg"/></Link> */}
            <div></div>
            <ul class={innerlinks}>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about'>Experience</Link></li>
                <li><Link to='/#projects'>Projects</Link></li>
                <li><Link to='/#contact'>Contact</Link></li>
                <li><a href='/' class={button}>Resume</a></li>
            </ul>
        </nav>
    )
}