import { Box, ClearFieldButton, DateField, EditPage, HasOne, TextField } from "@contember/admin";
import { PlayerForm } from '../forms/playerForms'
import * as React from "react";

export default () => (
    <EditPage entity="Player(id=$id)" rendererProps={{ title: "Edit player" }}>
        <PlayerForm />
    </EditPage>
)