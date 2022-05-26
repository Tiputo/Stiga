import getFooterMenu from "../partials/getFooterMenu"
import getHeaderMenu from "../partials/getHeaderMenu"
import getSettting from "../partials/getSettings"

const getHomePage = `#graphql
	query {	
		listPlayer{
			id
			firstname
			surname
			nickname
			image{
			  url
			  width
			  height
			  size
			  type
			  alt
			}
			teams{
				matchPlayerHome{
					playerHome{
						score
					}
				}
        
				matchPlayerAway{
					playerAway{
						score
					}
				}
			}              
  }	
			
		  listMatch{
			id
			publishAt
			playerHome{
			  id
			  score
			  player{		   
				nickname
				teams{
					score
				}
			  }
			}
			 playerAway{
			  id
			  score
			  player{
				nickname
				teams{
					score
				}
			  }
			}
		  }

		getPage(by: {role: homePage}) {
			id
			publishAt
			role
			text
			seo {
				id
				title
				description
				ogTitle
				ogDescription
				ogImage {
					id
					url
					width
					height
					alt
				}
			}
			blocks {
				id
				order
				type
				primaryText
				secondaryText
				content {
					id
					parts {
						id
						json
						references {
							id
							type
							target {
								id
								type
								url
								article {
									id
									slug
								}
								page {
									id
									slug
								}
							}
						}
					}
				}
				buttons {
					id
					order
					button {
						id
						label
						type
						target {
							id
							type
							url
							article {
								slug
							}
							page {
								slug
							}
						}
					}
				}
				image {
					url
					width
					height
					alt
				}
				images {
					id
					order
					image {
						url
						width
						height
						alt
					}
				}
				featureList {
					id
					order
					primaryText
					content {
						parts {
							json
							references {
								id
								type
								target {
									id
									type
									url
									article {
										id
										slug
									}
									page {
										id
										slug
									}
								}
							}
						}
					}
					icon {
						url
						width
						height
						alt
					}
				}
				testimonials {
					id
					order
					content {
						parts {
							json
							references {
								id
								type
								target {
									id
									type
									url
									article {
										id
										slug
									}
									page {
										id
										slug
									}
								}
							}
						}
					}
					author {
						name
						title
						image {
							url
							width
							height
							alt
						}
					}
				}
			}
			slug
		}
		${getHeaderMenu}
		${getFooterMenu}
		${getSettting}
	}
`

export default getHomePage
