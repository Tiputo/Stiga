import { clientSideFetch } from "../../lib/graphql/gqlfetch"
import createMatch from "../../lib/graphql/mutations/createMatch"

export default async function handler(req, res) {
  const { data, errors } = await clientSideFetch(createMatch)
  return res.status(200).json({ data, errors })
}
