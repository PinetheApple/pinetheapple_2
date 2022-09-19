import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/font-awesome'
import {
  projlist,
  proj,
  projlinks
} from '../components/styles/layout.module.css'
import { projs } from './proj_data'
import styled from 'styled-components'

const Proj=styled.section`
    padding-top: 10vh;
`

const Projects = ({ id }) =>{
    return (
        <Projs id={ id }>
            <h2>Projects</h2>
            <div className={ projlist }>
                {
                    projs.map(project => {
                        return(
                            <div className={ proj }>
                                <div className={ projlinks }>
                                    {
                                        project.links.map(link => {
                                            return(
                                                <a href={link.address} target="_blank"><FontAwesomeIcon icon={(link.label.startsWith('github'))? ['fab', 'github']:'up-right-from-square'} title={link.label} size='xl'/></a>
                                            )
                                        })
                                    }
                                </div>
                                
                                <h4>{ project.title }</h4>
                                { project.description }
                            </div>
                        )
                    })
                }
            </div>
        </Projs>
    )
}

export default Projects