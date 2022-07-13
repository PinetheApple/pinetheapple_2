import * as React from 'react'
import {leftsection, line} from './css/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'

export default function LeftSection(){
    return (
        <nav class={leftsection}>
            <ul>
                <li><a href="https://www.discord.gg/rqVKvVe" target="_blank"><FontAwesomeIcon icon={['fab', 'discord']} size='xl' title='discord server link'/></a></li>
                <li><a href="https://github.com/PinetheApple" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a></li>
                <li><a href="https://codepen.io/pinetheapple" target="_blank"><FontAwesomeIcon icon={['fab', 'codepen']} size='xl' title='codepen profile link' /></a></li>
                <li><div class={line}></div></li>
            </ul>
      </nav>
    )
}