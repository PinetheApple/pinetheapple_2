import * as React from 'react'
import { button, paragraph } from '../components/styles/layout.module.css'

const Contact = ({ id }) => {
    return(
        <section id={ id }>
            <h2>Contact</h2>
            <p className={ paragraph }>Always happy to hear about what you think of this site or any project you're interested in showing me. Feel free to email or DM on discord :) </p>
            <a href="mail:to" className={button}>Email Me</a>
        </section>
    )
}

export default Contact

