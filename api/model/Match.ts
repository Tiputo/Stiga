import { SchemaDefinition as def } from "@contember/schema-definition"
import { Player } from "./Player"

export class Match {
    playerHome = def.oneHasOne(MatchTeam)
    playerAway = def.oneHasOne(MatchTeam)
}

export class MatchTeam {
    player = def.oneHasOne(Player, "team")
    score = def.intColumn()
}