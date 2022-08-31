import * as React from 'react'
import { button } from '../components/styles/layout.module.css'

const Contact = ({ id }) => {
    return(
        <section id={ id }>
            <h2>Contact</h2>
            <p style={{margin:'2rem auto', maxWidth: '1200px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae hic quisquam placeat iste, assumenda delectus est nobis laboriosam corrupti ex nesciunt sequi illo deleniti rem consequatur pariatur aut quae. Doloribus!</p>
            {/* have to find another way to get this styled properly - styled components arent working for some reason */}
            <a href="mail:to" className={button}>Email Me</a>
        </section>
    )
}

export default Contact

