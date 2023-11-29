import { Outlet } from "react-router-dom";

const Padre = (props) => {
    return(
        <div className="App">
            <h1>Pokedex</h1>
            <hr></hr>
            <Outlet></Outlet>
        </div>
    )
}

export default Padre;
