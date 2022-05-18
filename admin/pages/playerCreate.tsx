import { ClearFieldButton, CreatePage, HasOne, TextField } from "@contember/admin";
import * as React from "react";
import { PlayerForm } from '../forms/playerForms'

export default () => (
    <CreatePage
        entity="Player"
        rendererProps={{ title: "Add Player" }}
        redirectOnSuccess="playerEdit(id: $entity.id)">
        <PlayerForm />
    </CreatePage>
)
