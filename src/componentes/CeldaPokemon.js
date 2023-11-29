import { Link } from "react-router-dom";

const CeldaPokemon = (props) => {
    return(
        <div>
            <h1>{props.nombrePokemon}</h1>
            <h3><Link to={"/pokemon/" + props.nombrePokemon}>Más info</Link></h3>
        </div>
    )
}

export default CeldaPokemon;
