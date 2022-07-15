import * as React from 'react'
import {leftsection, line, rightsection, rotate90} from './styles/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'

const  LeftSection =() => {
    return (
        <nav class={leftsection}>
            <ul>
                <li><a href="https://www.discord.gg/rqVKvVe" rel="noopener">
                    <FontAwesomeIcon icon={['fab', 'discord']} size='xl' title='discord server link'/>
                </a></li>
                <li><a href="https://github.com/PinetheApple" rel="noopener">
                    <FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' />
                </a></li>
                <li><a href="https://codepen.io/pinetheapple" rel="noopener">
                    <FontAwesomeIcon icon={['fab', 'codepen']} size='xl' title='codepen profile link' />
                </a></li>
                <li><div class={line}></div></li>
            </ul>
      </nav>
    )
}

const RightSection = () => {
    return (
        <div class={rightsection}>
            <p class={rotate90}><a href="mailto:">pinespace889@gmail.com</a></p>
            <div class={line}></div>
      </div>
    )
}

export default function SideSections(){
    return (
        <>
            <LeftSection />
            <RightSection />
        </>
    )
}