import { Component, HasOne, NumberField, SelectField } from '@contember/admin'
import * as React from 'react'

type MatchFormProps = {
    field: string
    labelTeam: string
}

export const MatchForm = Component<MatchFormProps>(
    ({ labelTeam, field }) => (
        <>
            <HasOne field={field}>
                <SelectField field="player" label={labelTeam} options="Player.nickname" allowNull />
                <NumberField field="score" label='Score' max={5} />
            </HasOne>
        </>
    ),
    'MatchForm',
)