import { EditPage } from "@contember/admin";
import * as React from "react";
import { PlayerForm } from '../forms/playerForms'

export default () => (
    <EditPage entity="Player(id=$id)" rendererProps={{ title: "Edit player" }}>
        <PlayerForm />
    </EditPage>
)