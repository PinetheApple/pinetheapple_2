import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'
import * as PageStyles from './layout.module.css'
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
    <div class={PageStyles.container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav class={PageStyles.pagelinks}>
          <Link to='/'><StaticImage alt="Logo" src="../images/logo.svg"/></Link>
          <ul class={PageStyles.innerlinks}>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/about'>Experience</Link></li>
              <li><Link to='/#projects'>Projects</Link></li>
              <li><Link to='/#contact'>Contact</Link></li>
              <li><a href='' class={PageStyles.button}>Resume</a></li>
          </ul>
      </nav>
      {/* end of navigation */}

      <nav class={PageStyles.leftsection}>
            <ul>
                <li><a href="https://www.discord.gg/rqVKvVe" target="_blank"><FontAwesomeIcon icon={['fab', 'discord']} size='xl' title='discord server link'/></a></li>
                <li><a href="https://github.com/PinetheApple" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a></li>
                <li><a href="https://codepen.io/pinetheapple" target="_blank"><FontAwesomeIcon icon={['fab', 'codepen']} size='xl' title='codepen profile link' /></a></li>
                <li><div class={PageStyles.line}></div></li>
            </ul>
      </nav>
      {/* end of left section */}

      <div class={PageStyles.rightsection}>
            <p class={PageStyles.rotate90}><a href="mailto:">pinespace889@gmail.com</a></p>
            <div class={PageStyles.line}></div>
      </div>
      {/* end of right section */}

      <main>
        {children}
      </main>
      {/* end of main section */}

      <footer>
        <section class={PageStyles.connections}>
          <a href="https://www.discord.gg/rqVKvVe" target="_blank"><FontAwesomeIcon icon={['fab', 'discord']} size='xl' title='discord server link'/></a>
          <a href="https://github.com/PinetheApple" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='xl' title='github profile link' /></a>
          <a href="https://codepen.io/pinetheapple" target="_blank"><FontAwesomeIcon icon={['fab', 'codepen']} size='xl' title='codepen profile link' /></a>
          <a href="https://fontawesome.com/" target="_blank"><FontAwesomeIcon icon={['fab', 'font-awesome']} size='xl' title='fontawesome link' /></a>
        </section>
        {/* end of connections */}

        <section class={PageStyles.details}>
          <p><a href="" target="blank"><FontAwesomeIcon icon={['fab', 'fork']} size='xl' title='codefork'/> Github repository</a></p>
          <small>Ⓒ Jonathan. No rights reserved.</small>
        </section>
        {/* end of details */}
      </footer>
      {/* end of footer */}
    </div>
  )
}

export default Layout