import * as React from 'react'
import {
    Link, 
    // StaticImage
} from 'gatsby'
import {pagelinks, innerlinks, button} from './styles/nav.module.css'

export default function Nav({image}){
    return (
        <nav class={pagelinks}>
            <div>{image}</div>
            <ul class={innerlinks}>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about#experience'>Experience</Link></li>
                <li><Link to='/#projects'>Projects</Link></li>
                <li><Link to='/#contact'>Contact</Link></li>
                <li><a href='/' class={button}>Resume</a></li>
            </ul>
        </nav>
    )
}