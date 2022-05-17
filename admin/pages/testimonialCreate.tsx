import {CreatePage, HasOne, TextField} from "@contember/admin";
import {ContentField} from "../components/ContentField";
import {ImageField} from "../components/ImageField";
import * as React from "react";

export default () => (
    <CreatePage
        entity="Testimonial"
        rendererProps={{title: "Add testimonial"}}
        redirectOnSuccess="testimonialEdit(id: $entity.id)"
    >
        <ContentField label="Testimonial"/>
        <HasOne field="author">
            <TextField field="name" label="Author's name"/>
            <ImageField field="image" label="Author's photo"/>
        </HasOne>
    </CreatePage>
)
