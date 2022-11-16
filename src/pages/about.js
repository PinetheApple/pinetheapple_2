import * as React from "react"
import Layout from "../components/layout"
import profile_picture from "../images/profile_picture.png"
import styled from "styled-components"

const About = styled.section`
  display: flex; 
  justify-content: flex-end;
  gap: 5%;
  align-items: center;
  min-height: 90vh;

  img{
    border-radius: 50%;
  }

  @media (max-width: 1300px){
    img{
      height: 20rem;
      width: auto;
  }

  @media (max-width: 1200px){
    img{
        height: 17rem;
    }

    gap: 2%;
  }

  @media (max-width: 975px){
    flex-direction: column;
    margin-top: 2rem;
  }

  @media (max-width: 850px) {
    img{
      height: 15rem;
    }
  }

  @media (max-width: 400px){
    margin-top: -1rem;

    img{
        height: 12rem;
    }
  }
`

const AboutSec = styled.section`
	flex-basis: 60%;
	padding-bottom: 3rem;

	h3 {
		font-size: 2.5rem;
		text-align: center;
		color: var(--c5);
		margin-top: 1rem;
	}

	p {
		padding: 0 2rem 0 0;
	}

	@media (max-width: 975px) {
		p {
			padding: 0 3rem;
		}
	}

	@media (max-width: 850px) {
		p {
			padding: 0;
		}
	}
`

const Experience = styled.section`
	h2 {
		margin-bottom: 5rem;
	}

	p {
		margin: 2rem auto;
		max-width: 1000px;
		font-size: 1.2rem;
	}
`

const AboutPage = () => {
	return (
		<Layout>
			<About id="about">
				<img
					src={profile_picture}
					alt="profile"
					height="370px"
					width="369px"
				/>
				<AboutSec>
					<h3>About Me</h3>
					<p>Hello there. I'm Jonathan.</p>
					<p>
						I am skilled at object-oriented programming. I'm
						comfortable working with Java and Python.
					</p>
					<p>
						I'm currently pursuing a degree in Computer Science
						while learning random stuff off the internet like web
						development and computer networking.
					</p>
					<p>I'm looking to collaborate on web-related projects.</p>
				</AboutSec>
			</About>
			<Experience id="experience">
				<h2>Experience</h2>
				<p>
					Business Web Solutions- <span>Intern</span>
					<time> (3 months)</time>
				</p>
			</Experience>
		</Layout>
	)
}

export default AboutPage

export { Head } from "../components/seo"
