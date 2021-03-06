import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { clientSideFetch } from '../lib/graphql/gqlfetch';
import createMatch from '../lib/graphql/mutations/createMatch';
import style from '../styles/AddMatchForm.module.sass';
export default function AddMatchForm(props: any) {

    const listPlayer = props.listPlayer

    const [submitState, setSubmitState] = useState<any>(null)

    const submitForm = useCallback(async (event, data) => {
        const { errors, data: submitData } = await clientSideFetch(createMatch(data.playerHomeId as string, parseInt(data.playerHomeScore as string), data.playerAwayId as string, parseInt(data.playerAwayScore as string)))
        if (errors) {
            console.error(errors)
            setSubmitState([{ message: 'Zápas nemůže být vytvořen.', ok: false }])
        } else {
            setSubmitState([{ message: 'Zápas vytvořen.', ok: true }])
            event.target.reset();
        }
    }, [])

    const onSubmit = useCallback((event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        //@TODO: Refactor if new condition is going to be added.
        if (data.playerAwayScore !== data.playerHomeScore && data.playerHomeId !== data.playerAwayId && (parseInt(data.playerHomeScore.toString()) === 5 || parseInt(data.playerAwayScore.toString()) === 5)) {
            submitForm(event, data);
        } else if (data.playerAwayScore === data.playerHomeScore && data.playerHomeId === data.playerAwayId) {
            setSubmitState([{ message: 'Skóre nemůže být současně stejné u obou stran a u stejných hráčů.', ok: false }])
        } else if (parseInt(data.playerHomeScore.toString()) !== 5 || parseInt(data.playerAwayScore.toString()) !== 5) {
            setSubmitState([{ message: 'Jeden z hráčů musí být vítěz.', ok: false }])
        } else if (data.playerAwayScore === data.playerHomeScore) {
            setSubmitState([{ message: 'Skóre nemůže být stejné na obou stranách.', ok: false }])
        } else if (data.playerHomeId === data.playerAwayId) {
            setSubmitState([{ message: 'Nemůžeš si vybrat stejného hráče na každé straně.', ok: false }])
        }
    }, [submitForm])

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="playerHomeId">Vyber domácího hráče: </label>
                    <select name="playerHomeId" id="playerHomeSelect" required>
                        <option value="">--Vyber možnost--</option>
                        {listPlayer.map(player => (
                            <option key={player.id} value={player.id}>{player.nickname}</option>
                        ))}
                    </select>
                    <label htmlFor="playerHomeScore">Skóre</label>
                    <input type="number" name="playerHomeScore" id="playerHomeScore" min="0" max="5" placeholder="0 do 5" required />
                </div>

                <div>
                    <label htmlFor="playerAwayId">Vyber venkovního hráče: </label>
                    <select name="playerAwayId" id="playerAwaySelect" required>
                        <option value="">--Vyber možnost--</option>
                        {listPlayer.map(player => (
                            <option key={player.id} value={player.id}>{player.nickname}</option>
                        ))}
                    </select>
                    <label htmlFor="playerAwayScore">Skóre</label>
                    <input type="number" name="playerAwayScore" id="playerAwayScore" min="0" max="5" placeholder="0 do 5" required />
                </div>

                <div>
                    <button type="submit">Přidej!</button>
                </div>
                {submitState &&
                    submitState.map((status, index) => <div className={clsx(style.message, status.ok ? style.success : style.fail)} key={index}>{status.message.text ? status.message.text : status.message}</div>)
                }
            </form>
        </>
    )
}
