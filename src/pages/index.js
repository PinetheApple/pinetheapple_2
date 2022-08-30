import * as React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'
import {
  hero, 
  contact,
  button,
} from '../components/styles/layout.module.css'

const IndexPage = () => {
  return (
    <Layout title="Home Page" description="index page">
      <section className={hero}>
            <h1>Jonathan Paul</h1>
            <p>STUDENT<span>WEB DEVELOPER</span></p>
        </section>
        <section>wip site </section>
        <Projects />

            <section id={contact}>
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti eligendi maxime necessitatibus quo! Dolorem quas odit totam facilis! Minus facilis quod rem aliquam delectus ut quam, reprehenderit minima asperiores!</p>
                <a href="mail:to" className={button}>Email Me</a>
            </section>
    </Layout>
  )
}

export default IndexPage