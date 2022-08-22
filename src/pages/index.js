import * as React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'
import {
  hero, 
  projects,
  projlist,
  proj,
  contact,
  button,
  projlinks
} from '../components/styles/layout.module.css'

const IndexPage = () => {
  return (
    <Layout title="Home Page" description="index page">
      <section className={hero}>
                <h1>Jonathan Paul</h1>
                <p>STUDENT<span>WEB DEVELOPER</span></p>
            </section>
        <section>the nav links dont work properly :(</section>
            <section id="project">
                <h2>Projects</h2>
                <div className={projlist}>
                    <div className={proj}>
                        <div className={projlinks}>
                            <a href="/" target="_blank"><FontAwesomeIcon icon={'up-right-from-square'} title='site link' size='xl'/></a>
                            <a href="/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a>
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at, ullam quod esse, saepe laboriosam totam tenetur aliquam eveniet, quia recusandae. Atque ipsum odio, quibusdam cum laborum nemo fugit dicta.
                    </div>
                    <div className={proj}>
                        <div className={projlinks}>
                            <a href="/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a>
                        </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, fugit, pariatur esse odio deleniti dicta a explicabo libero quod eaque voluptatem ipsam cupiditate maiores, quasi in vitae praesentium ex officia.
                    </div>
                    <div className={proj}>
                        <div className={projlinks}>
                            <a href="/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a>
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente inventore repellat aliquam illum voluptatum maiores est necessitatibus tempora amet impedit, voluptas atque, sequi illo nam corporis. Error, sint labore.
                    </div>
                    <div className={proj}>
                        <div className={projlinks}>
                            <a href="/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a>
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente inventore repellat aliquam illum voluptatum maiores est necessitatibus tempora amet impedit, voluptas atque, sequi illo nam corporis. Error, sint labore.
                    </div>
                </div>
            </section>

            <section id={contact}>
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti eligendi maxime necessitatibus quo! Dolorem quas odit totam facilis! Minus facilis quod rem aliquam delectus ut quam, reprehenderit minima asperiores!</p>
                <a href="mail:to" className={button}>Email Me</a>
            </section>
    </Layout>
  )
}

export default IndexPage