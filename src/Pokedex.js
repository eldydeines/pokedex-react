import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {

    const { allPokemon } = props;
    return (
        <>
            {allPokemon.map(p => <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)}
        </>
    );
};

export default Pokedex;