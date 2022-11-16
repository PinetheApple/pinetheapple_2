import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"
import { projs } from "./proj_data"
import styled from "styled-components"

const Projs = styled.section`
	padding-top: 10vh;

	> div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: stretch;
		gap: 2rem;
	}
`

const Proj = styled.div`
	flex-basis: 35%;
	background-color: var(--c1);
	color: white;
	padding: 1.5rem 1.5rem 2rem;

	h4 {
		font-size: 1.2rem;
	}

	@media (max-width: 1050px) {
		flex-basis: 60%;
	}

	@media (max-width: 850px) {
		flex-basis: 70%;
	}

	@media (max-width: 750px) {
		flex-basis: 80%;
	}

	@media (max-width: 650px) {
		flex-basis: 90%;
	}

	@media (max-width: 460px) {
		flex-basis: 100%;
	}
`

const ProjLinks = styled.div`
	display: flex;
	justify-content: right;
	gap: 0.7rem;
	margin: 0 auto 1rem;
`

const Projects = ({ id }) => {
	return (
		<Projs id={id}>
			<h2>Projects</h2>
			<div>
				{projs.map((project, i) => {
					return (
						<Proj key={i}>
							<ProjLinks>
								{project.links.map((link, index) => {
									return (
										<a
											href={link.address}
											target="_blank"
											rel="noreferrer noopener"
											key={index}>
											<FontAwesomeIcon
												icon={
													link.label.startsWith(
														"github"
													)
														? ["fab", "github"]
														: "up-right-from-square"
												}
												title={link.label}
												size="xl"
											/>
										</a>
									)
								})}
							</ProjLinks>

							<h4>{project.title}</h4>
							{project.description}
						</Proj>
					)
				})}
			</div>
		</Projs>
	)
}

export default Projects
