const createMatch = `#graphql
	mutation {
		createMatch(
			data: {
				playerHome: {
				create: {
					score: 5
					player: { connect: { id: "5a1dc321-1a1e-4cda-acae-bb8a0466c4af" } }
				}
				}
				playerAway: {
				create: {
					score: 4
					player: { connect: { id: "85f34c4a-f2c8-4027-a113-450c27fadbef" } }
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
