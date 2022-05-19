import { DataGridPage, DeleteEntityButton, GenericCell, Link, LinkButton, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
    <DataGridPage
        entities="Match"
        itemsPerPage={50}
        rendererProps={{
            title: "Match",
            actions: <LinkButton to="matchCreate">Add match</LinkButton>,
        }}
    >
        <TextCell
            field="playerHome.player.nickname"
            header="Player Home"
            format={(scalar) => <Link to="matchEdit(id: $entity.id)">{scalar}</Link>}
        />

        <TextCell
            field="playerHome.score"
            header="Player Home Score"
        />

        <TextCell
            field="playerAway.player.nickname"
            header="Player Away"
            format={(scalar) => <Link to="matchEdit(id: $entity.id)">{scalar}</Link>}
        />

        <TextCell
            field="playerAway.score"
            header="Player Away Score"
        />

        <GenericCell>
            <DeleteEntityButton immediatePersist />
        </GenericCell>
    </DataGridPage>
)