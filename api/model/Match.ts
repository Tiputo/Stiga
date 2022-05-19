import { SchemaDefinition as def } from "@contember/schema-definition"
import { Player } from "./Player"

export class Match {
    playerHome = def.manyHasOne(MatchTeam, "matchPlayerHome")
    playerAway = def.manyHasOne(MatchTeam, "matchPlayerAway")
}

export class MatchTeam {
    matchPlayerHome = def.oneHasMany(Match, "playerHome")
    matchPlayerAway = def.oneHasMany(Match, "playerAway")

    player = def.manyHasOne(Player, "teams").notNull().cascadeOnDelete()
    score = def.intColumn()
}