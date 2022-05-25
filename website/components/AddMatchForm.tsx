import React from 'react';

export default function AddMatchForm(props: any) {

    const listPlayer = props.listPlayer

    return (
        <div className='form'>
            <form action="" method="get" className="form">
                <div className="playerFormInput">
                    <label htmlFor="playerHome">Vyber domácího hráče: </label>
                    <select name="playerHome" id="playerHomeSelect" required>
                        <option value="">--Vyber možnost--</option>
                        {listPlayer.map(player => (
                            <option key={player.id} value="listPlayers">{player.nickname}</option>
                        ))}
                    </select>
                    <label htmlFor="playerHomeScore">Skóre</label>
                    <input type="number" name="playerHomeScore" id="playerHomeScore" min="1" max="5" placeholder="1 do 5" required />
                </div>

                <div className="playerFormInput">
                    <label htmlFor="playerAway">Vyber venkovního hráče: </label>
                    <select name="playerAway" id="playerAwaySelect" required>
                        <option value="">--Vyber možnost--</option>
                        {listPlayer.map(player => (
                            <option key={player.id} value="listPlayers">{player.nickname}</option>
                        ))}
                    </select>
                    <label htmlFor="playerAwayScore">Skóre</label>
                    <input type="number" name="playerAwayScore" id="playerAwayScore" min="1" max="5" placeholder="1 do 5" required />
                </div>

                <div className="playerFormInput">
                    <input type="submit" value="Přidej!" />
                </div>
            </form>
        </div>
    )
}
