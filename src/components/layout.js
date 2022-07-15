import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as PageStyles from './css/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import Nav from './nav'; 
import SideSections from './sidesections'
import Footer from './footer'
import { Seo } from './seo'

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
      <div class={PageStyles.container}>
        <Nav> <Link to='/'><StaticImage alt="Logo" src="../images/logo.svg"/></Link> </Nav>
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