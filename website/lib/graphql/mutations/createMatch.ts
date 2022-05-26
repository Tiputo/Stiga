const createMatch = (playerHomeId: string, playerHomeScore: number, playerAwayId: string, playerAwayScore: number) => {
	return `#graphql
	mutation {
		createMatch(data: {
			playerHome: {
				create: {
					score: ${playerHomeScore}
					player: { connect: { id: "${playerHomeId}" } }
				}
				}
				playerAway: {
				create: {
					score: ${playerAwayScore}
					player: { connect: { id: "${playerAwayId}" } }
				}
				}
		}) {
			ok
			errorMessage
		}
	}
`
}

export default createMatch
