import * as React from 'react'
import Layout from '../components/layout'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'
import '../images/favicon_porg'
// import {
//   hero, 
//   projects,
//   projlist,
//   proj,
//   contact,
//   button,
//   projlinks
// } from '../components/css/layout.module.css'

const IndexPage = () => {
  return (
    <Layout title="Home Page" description="index page" image='favicon_porg'>
      <h1>Send help</h1>
    </Layout>
  )
}

export default IndexPage