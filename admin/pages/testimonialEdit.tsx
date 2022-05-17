import {EditPage, HasOne, TextField} from "@contember/admin";
import {ContentField} from "../components/ContentField";
import {ImageField} from "../components/ImageField";
import * as React from "react";

export default () => (
    <EditPage entity="Testimonial(id=$id)" rendererProps={{title: "Edit testimonial"}}>
        <ContentField label="Testimonial"/>
        <HasOne field="author">
            <TextField field="name" label="Author's name"/>
            <ImageField field="image" label="Author's photo"/>
        </HasOne>
    </EditPage>
)