const Contador = (props) => {
    return(
        <>
            <p>{props.habilidad}</p>
            <p>{props.numeroBase+Math.trunc(props.nivel*(props.numeroBase/100))}</p>
        </>
    )

}

export default Contador;
