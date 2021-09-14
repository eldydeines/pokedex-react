import React from 'react';
import './Pokecard.css';

function Pokecard(props) {
    let { id, name, type, base_experience } = props;
    let src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name}</h2>
            <img src={src} className="Pokecard-img" alt="Pokemon" />
            <p className="Pokecard-text">Type: {type}</p>
            <p className="Pokecard-text">EXP: {base_experience}</p>
        </div>
    );
}

export default Pokecard;