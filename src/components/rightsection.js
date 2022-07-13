import * as React from 'react'
import {rightsection, rotate90, line} from './css/layout.module.css'

export default function RightSection(){
    return (
        <div class={rightsection}>
            <p class={rotate90}><a href="mailto:">pinespace889@gmail.com</a></p>
            <div class={line}></div>
      </div>
    )
}