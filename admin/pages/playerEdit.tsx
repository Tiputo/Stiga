import {ClearFieldButton, DateField, EditPage, HasOne, TextField} from "@contember/admin";
import {ImageField} from "../components/ImageField";
import * as React from "react";

export default () => (
    <EditPage entity="Player(id=$id)" rendererProps={{title: "Edit player"}}>

            <TextField field="firstname" label="Player's firstname"/>
            <TextField field="surname" label="Player's surname"/>
            <TextField field="nickname" label="Player's nickname"/>
            <ImageField field="image" label="Player's photo"/>
    </EditPage>
)