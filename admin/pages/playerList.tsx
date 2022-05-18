import {DataGridPage, DeleteEntityButton, GenericCell, Link, LinkButton, TextCell} from "@contember/admin";
import * as React from "react";

export default () => (
    <DataGridPage
        entities="Player"
        itemsPerPage={50}
        rendererProps={{
            title: "Player",
            actions: <LinkButton to="playerCreate">Add player</LinkButton>,
        }}
    >
        <TextCell 
        field="firstname"
        header="Player's first name"
        format={(scalar) => <Link to="playerEdit(id: $entity.id)">{scalar}</Link>}

        />

<TextCell 
        field="surname"
        header="Player's surname"
        />

<TextCell 
        field="nickname"
        header="Player's nickname"
        />

        <GenericCell>
        <DeleteEntityButton immediatePersist/>        
        </GenericCell>
    </DataGridPage>
)
