import {DataGridPage, LinkButton, TextCell} from "@contember/admin";
import * as React from "react";

export default () => (
    <DataGridPage
        entities="Testimonial"
        itemsPerPage={50}
        rendererProps={{
            title: "Testimonials",
            actions: <LinkButton to="testimonialCreate">Add testimonial</LinkButton>,
        }}
    >
        <TextCell field="author.name" header="Author's name"/>
    </DataGridPage>
)
