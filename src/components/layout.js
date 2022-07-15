import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Seo } from './seo'

// styling
import '../components/styles/global.css'
import {
  container,
  pagelinks
} from './styles/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import Nav from './nav'; 
import SideSections from './sidesections'
import Footer from './footer'


const Layout = ({ 
  children,
  title=false,
  description=false,
  image=false,
  path=false
 }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const meta=data?.site?.siteMetadata 

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <div className={container}>
        <nav className={pagelinks}>
          <Link to='/'><StaticImage alt="Logo" src="../images/logo.svg"/></Link>
          <Nav />
        </nav>
        <SideSections />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout