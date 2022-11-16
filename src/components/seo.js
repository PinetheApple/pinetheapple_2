import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export function Head() {
	const data = useStaticQuery(graphql`
		query GetSiteMetadata {
			site {
				siteMetadata {
					title
					description
					siteUrl
					image
				}
			}
		}
	`)

	const defaults = data?.site?.siteMetadata

	const title = defaults.title
	const description = defaults.description
	const image = new URL(defaults.image, defaults.siteUrl)
	const url = new URL(`/`, defaults.siteUrl)

	return (
		<>
			<title>{title}</title>
			<meta
				name="description"
				content={description}
			/>
			<link
				rel="canonical"
				href={url}
			/>
			{image && (
				<meta
					name="image"
					content={image}
				/>
			)}

			<meta
				property="og:url"
				content={url}
			/>
			<meta
				property="og:type"
				content="website"
			/>
			<meta
				property="og:title"
				content={title}
			/>
			<meta
				property="og:description"
				content={description}
			/>
			{image && (
				<meta
					property="og:image"
					content={image}
				/>
			)}

			<meta
				name="twitter:card"
				content="summary_large_image"
			/>
			<meta
				name="twitter:title"
				content={title}
			/>
			<meta
				name="twitter:description"
				content={description}
			/>
			{image && (
				<meta
					name="twitter:image"
					content={image}
				/>
			)}
		</>
	)
}
