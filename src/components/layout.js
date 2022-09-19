import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Seo } from './seo'

// styling
import styled from 'styled-components'
import '../components/styles/global.css'
import Nav from './nav'; 
import SideSections from './sidesections'
import Footer from './footer'

const Container=styled.div`
  font-family: var(--f1);
  color: var(--c3);
`

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
      <Seo title={title || meta.title} description={description} image={image} path={path} />
      <Container>
        <Nav />
        <SideSections />
        <main>
          {children}
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout