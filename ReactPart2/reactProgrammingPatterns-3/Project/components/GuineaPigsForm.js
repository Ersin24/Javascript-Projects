import React from "react";

function GuineaPigsForm( {favoriteGP, onSelectFavorite, onResetFavorite} ){
    return(
        <div data-testid="guineaPigsForm" id="guineaPigsForm">
            <label>Choose Your Favorite Guinea Pig:
                <select value={favoriteGP} onChange={onSelectFavorite}>
                    <option value="0">Alex</option>
                    <option value="1">Alex</option>
                    <option value="2">Alex</option>
                    <option value="3">Alex</option>
                </select>
            </label>
            <button onClick={onResetFavorite}>Reset Favorite</button>

        </div>
    )
}


export default GuineaPigsForm;