import { SchemaDefinition as def } from "@contember/schema-definition"
import { Player } from "./Player"

export class Match {
    playerHome = def.manyHasOne(MatchTeam)
    playerAway = def.manyHasOne(MatchTeam)
}

export class MatchTeam {
    player = def.manyHasOne(Player, "teams").notNull().cascadeOnDelete()
    score = def.intColumn()
}