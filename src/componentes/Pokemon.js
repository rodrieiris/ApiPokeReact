import Contador from './Contador';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Pokemon = (props) => {

    const [nivel, setNivel] = useState(1);
    const [nombre, setNombre] = useState("");
    const [urlImagen, setUrlImagen] = useState("");
    const [tipo, setTipo] = useState("");
    const [tipo2, setTipo2] = useState ("");
    const [vida, setVida] = useState("");
    const [atq, setAtq] = useState("");
    const [def, setDef] = useState("");
    const [atqEspecial, setAtqEspecial] = useState("");
    const [defEspecial, setDefEspecial] = useState("");
    const [velocidad, setVelocidad] = useState("");
    const parametros = useParams();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + parametros.nombreDelPokemon)
        .then((response) => {
            console.log(response.data);
            setNombre(response.data.name);
            setUrlImagen(response.data.sprites.front_default);
            setTipo(response.data.types[0].type.name);
            if((response.data.types).length ===2){
                setTipo2("- " + response.data.types[1].type.name);
            }
            setVida(response.data.stats[0].base_stat);
            setAtq(response.data.stats[1].base_stat);
            setDef(response.data.stats[2].base_stat);
            setAtqEspecial(response.data.stats[3].base_stat);
            setDefEspecial(response.data.stats[4].base_stat);
            setVelocidad(response.data.stats[5].base_stat);
        })
    }, [])

    function subir(){
        if(nivel === 100){return;}
        setNivel(nivelAnterior => {return nivelAnterior +1})
    }

    function bajar(){
        if(nivel === 1){return;}
        setNivel(nivelAnterior => {return nivelAnterior -1})
    }
    return (
        <>
            <div>
                <h2>{nombre}</h2>
                <h3>Tipo: {tipo} {tipo2}</h3>
                <img src={urlImagen} alt="Imagen Pokemon"></img>
                <h3>Nivel: {nivel}</h3>
                <button onClick={subir}>Subir de Nivel</button>
                <button onClick={bajar}>Bajar de Nivel</button>
                <Contador habilidad = "HP" numeroBase = {vida} nivel = {nivel}/>
                <Contador habilidad = "Ataque" numeroBase = {atq} nivel = {nivel}/>
                <Contador habilidad = "Defensa" numeroBase = {def} nivel = {nivel}/>
                <Contador habilidad = "Ataque Especial" numeroBase = {atqEspecial} nivel = {nivel}/>
                <Contador habilidad = "Defensa Especial" numeroBase = {defEspecial} nivel = {nivel}/>
                <Contador habilidad = "Velocidad" numeroBase = {velocidad} nivel = {nivel}/>
                <Link to={"/"}>Volver</Link>
            </div>
        </>
    );
}

export default Pokemon;
