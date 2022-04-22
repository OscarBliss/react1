import React from "react";
import Nombre from "./Nombre"

class NombreListra extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            mensaje:"",
            listaNombres:["Bedu"]
        };
    }

    componentDidUpdate(revProps, prevState){
        if (this.state.listaNombres !==prevState.listaNombres)
        this.setState({
            mensaje: `longitud de la lista es: ${this.state.listaNombres.length}`
        })
    }



    //funcion para el input
    handleInputChange = (event) =>{
        this.setState(
            {
                nombre: event.target.value
            }
        )
    }


    //funcion de boton para agregar el nombre a la lista
    handleClick = () =>{
       const nombreEstado = this.state.nombre;
       if (!nombreEstado)
        return;
       const listaActualizada = [
           ...this.state.listaNombres,
           nombreEstado
       ]; 

       this.setState({
           nombre:'',
           listaNombres: listaActualizada
       })
    }


    borraNombreDeLista = (key)=>{
        const copiaLista = [
            ...this.state.listaNombres
        ]

        copiaLista.splice(key,1)
        this.setState({
            listaNombres: copiaLista
        })
    }

    render(){
        return(
            <>
                <div>
                    {this.state.mensaje}
                    <input
                    value={this.state.nombre}
                    onChange={this.handleInputChange}
                    />

                    <button onClick={this.handleClick}>
                        Agregar
                    </button>

                    <ul>
                        <li>oscar
                            {this.state.listaNombres.map((nbr,idx)=>(
                                <li key={idx}>
                                    <Nombre 
                                        nombre={nbr}
                                        borraNombreDeLista={()=>this.borraNombreDeLista(key)}
                                    />
                                </li>
                            ))}
                        </li>
                        <li>eve</li>
                        <li>gis</li>
                    </ul>
                </div>
            </>
        )
    }

}

export default NombreListra;