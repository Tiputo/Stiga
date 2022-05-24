import { SchemaDefinition as def } from "@contember/schema-definition"
import { Player } from "./Player"

export class Match {
    playerHome = def.oneHasOneInverse(MatchTeam, "matchPlayerHome")
    playerAway = def.oneHasOneInverse(MatchTeam, "matchPlayerAway")

    publishAt = def.dateTimeColumn().default('now')
}

export class MatchTeam {
    matchPlayerHome = def.oneHasOne(Match, "playerHome").cascadeOnDelete()
    matchPlayerAway = def.oneHasOne(Match, "playerAway").cascadeOnDelete()

    player = def.manyHasOne(Player, "teams").notNull().cascadeOnDelete()
    score = def.intColumn()
}