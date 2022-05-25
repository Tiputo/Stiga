const createMatch = `#graphql
	mutation {
		createMatch(
			data: {
				playerHome: {
				create: {
					score: 5
					player: { connect: { id: "e9f7e5a3-eeef-43d9-a318-e7c6d9f2173c" } }
				}
				}
				playerAway: {
				create: {
					score: 4
					player: { connect: { id: "dc4cc9c6-9a29-46c5-8ab4-036d192d1c9e" } }
				}
				}
			}
	) {
	  ok
	  errorMessage
	}
  }
`

export default createMatch
