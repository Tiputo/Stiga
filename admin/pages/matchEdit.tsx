import { Box, EditPage } from "@contember/admin";
import * as React from "react";
import { MatchForm, MatchSideForm } from "../forms/matchForms";

export default () => (
    <EditPage entity="Match(id=$id)" rendererProps={{ title: "Edit player", side: <MatchSideForm /> }}>
        <Box heading="Matches">
            <MatchForm field="playerHome" labelTeam="Choose a home player" />
            <MatchForm field="playerAway" labelTeam="Choose an away player" />
        </Box>
    </EditPage>
)