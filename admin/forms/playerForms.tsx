import * as React from 'react'
import { Component, TextField } from '@contember/admin'
import { ImageField } from '../components/ImageField'

export const PlayerForm = Component(
    () => (
        <>
            <TextField field="firstname" label="Player's firstname" />
            <TextField field="surname" label="Player's surname" />
            <TextField field="nickname" label="Player's nickname" />
            <ImageField field="image" label="Player's photo" />
        </>
    ),
    'PlayerForm',
)