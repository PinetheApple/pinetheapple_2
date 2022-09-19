import * as React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Contact from '../components/contact'
import '../utils/font-awesome'
import {
  hero
} from '../components/styles/layout.module.css'

const IndexPage = () => {
  return (
    <Layout title="Home Page" description="index page">
      <section className={hero}>
        <h1>Jonathan Paul</h1>
        <p>Student<span>Web Developer</span></p>
      </section>
      <Projects id='projects'/>
      <Contact id='contact'/>
    </Layout>
  )
}

export default IndexPage