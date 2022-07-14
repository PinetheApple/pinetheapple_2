import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as PageStyles from './css/layout.module.css'
// import { StaticImage } from 'gatsby-plugin-image'
import Nav from './nav'; 
import LeftSection from './leftsection'
import RightSection from './rightsection'
import Footer from './footer'

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
      <Nav />
      <LeftSection />
      <RightSection />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout