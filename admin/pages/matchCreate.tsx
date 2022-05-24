import { Box, CreatePage } from "@contember/admin";
import * as React from "react";
import { MatchForm, MatchSideForm } from "../forms/matchForms";

export default () => (
    <CreatePage
        entity="Match"
        rendererProps={{ title: "Add Match", side: <MatchSideForm /> }}
        redirectOnSuccess="matchEdit(id: $entity.id)">
        <Box heading="Matches">
            <MatchForm field="playerHome" labelTeam="Choose a home player" />
            <MatchForm field="playerAway" labelTeam="Choose an away player" />
        </Box>
    </CreatePage>
)
