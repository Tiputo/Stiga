import { SchemaDefinition as def } from "@contember/schema-definition"
import { Image } from "./Image"
import { MatchTeam } from "./Match"

export class Player {
    firstname = def.stringColumn().notNull()
    surname = def.stringColumn().notNull()
    nickname = def.stringColumn()
    image = def.manyHasOne(Image)

    team = def.oneHasOneInverse(MatchTeam, "player")
}

