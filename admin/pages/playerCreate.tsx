import {ClearFieldButton, CreatePage, HasOne, TextField} from "@contember/admin";
import {ContentField} from "../components/ContentField";
import {ImageField} from "../components/ImageField";
import * as React from "react";

export default () => (
    <CreatePage
        entity="Player"
        rendererProps={{title: "Add Player"}}
        redirectOnSuccess="playerEdit(id: $entity.id)">
            <TextField field="firstname" label="Player's firstname"/>
            <TextField field="surname" label="Player's surname"/>
            <TextField field="nickname" label="Player's nickname"/>
            <ImageField field="image" label="Player's photo"/>
    </CreatePage>
)
