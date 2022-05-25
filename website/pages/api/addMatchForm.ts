import { clientSideFetch } from "../../lib/graphql/gqlfetch"

export default function handler(req, res) {
	// res.status(200).json({ name: 'John Doe' })
	const createMatch = async () => {
		const { data, errors } = await clientSideFetch(createMatch)

		return { data, errors }
	}
	const { data, errors } = createMatch()
	return res.status(200).json({ data, errors })
}