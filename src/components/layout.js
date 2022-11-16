import * as React from "react"

// styling
import styled from "styled-components"
import "../components/styles/global.css"
import Nav from "./nav"
import SideSections from "./sidesections"
import Footer from "./footer"

const Container = styled.div`
	font-family: var(--f1);
	color: var(--c3);
`

const Layout = ({ children }) => {
	return (
		<>
			<Container>
				<Nav />
				<SideSections />
				<main>{children}</main>
				<Footer />
			</Container>
		</>
	)
}

export default Layout
