import CeldaPokemon from "./CeldaPokemon";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => {
            setPokemon(response.data.results);
        })
    }, [])

    return (
        <div>
            {pokemon.map( (x) => {
                return <CeldaPokemon nombrePokemon = {x.name} />
            })}
        </div>
    );
}

export default Home;
