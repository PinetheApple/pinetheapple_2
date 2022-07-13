import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'
import {
  container,
  heading,
  pagelinks,
  innerlinks,
  leftsection,
  rightsection,
  line,
  rotate90,
  button,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav class={pagelinks}>
          <Link to=''><StaticImage alt="Logo" src="../images/logo.svg"/></Link>
          <ul class={innerlinks}>
              <li><Link to=''>About</Link></li>
              <li><Link to=''>Experience</Link></li>
              <li><Link to='#projects'>Projects</Link></li>
              <li><Link to='#contact'>Contact</Link></li>
              <li><Link to='' className={button}>Resume</Link></li>
          </ul>
      </nav>
      {/* end of navigation */}
      <nav class={leftsection}>
            <ul>
                <li><a href="https://www.discord.gg/rqVKvVe" target="_blank"><FontAwesomeIcon icon={['fab', 'discord']} size='xl' title='discord server link'/></a></li>
                <li><a href="https://github.com/PinetheApple" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a></li>
                <li><a href="https://codepen.io/pinetheapple" target="_blank"><FontAwesomeIcon icon={['fab', 'codepen']} size='xl' title='github profile link' /></a></li>
                <li><div class={line}></div></li>
            </ul>
      </nav>
      {/* end of left section */}
      <div class={rightsection}>
            <p class={rotate90}><a href="mailto:">pinespace889@gmail.com</a></p>
            <div class={line}></div>
      </div>
      {/* end of right section */}
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1>
        {children} */}
      </main>
    </div>
  )
}

export default Layout