import * as React from 'react'
import { button } from '../components/styles/nav.module.css'
import styled from 'styled-components'

const Paragraph=styled.p`
    margin: 2rem auto;
    max-width: 1200px;
    text-align: center;

    @media (max-width: 1450px) {
        max-width: 1000px;
    }

    @media (max-width: 1250px){
        max-width: 900px;
    }

    @media (max-width: 1150px){
        max-width: 750px;
    }

    @media (max-width: 1024px) {
        width: 700px;
    }
      
    @media (max-width: 950px){
        max-width: 600px;
    }
      
    @media (max-width: 850px) {
        max-width: fit-content;
        text-align: left;
    }
`

const Contact = ({ id }) => {
    return(
        <section id={ id }>
            <h2>Contact</h2>
            <Paragraph>Always happy to hear about what you think of this site or any project you're interested in showing me. Feel free to email or DM on discord :) </Paragraph>
            <a href="mail:to" className={button}>Email Me</a>
        </section>
    )
}

export default Contact

