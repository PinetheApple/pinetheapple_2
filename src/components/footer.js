import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'
import {connections, details} from './styles/layout.module.css'

export default function Footer(){
    return(
        <footer>
        <section className={connections}>
          <a href="https://www.discord.gg/rqVKvVe" rel="noopener">
            <FontAwesomeIcon icon={['fab', 'discord']} size='xl' title='discord server link'/>
          </a>
          <a href="https://github.com/PinetheApple" rel="noopener">
            <FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' />
          </a>
          <a href="https://codepen.io/pinetheapple" rel="noopener">
            <FontAwesomeIcon icon={['fab', 'codepen']} size='xl' title='codepen profile link' />
          </a>
          <a href="https://fontawesome.com/" rel="noopener">
            <FontAwesomeIcon icon={['fab', 'font-awesome']} size='xl' title='fontawesome link' />
          </a>
        </section>

        <section className={details}>
          <p><a href="https://github.com/PinetheApple/pinetheapple_2" rel="noopener">
            <FontAwesomeIcon icon={'code-fork'}  title='codefork' size='sm'/> Github repository</a>
          </p>
          <small>Ⓒ Jonathan. No rights reserved.</small>
        </section>
      </footer>
    )
}