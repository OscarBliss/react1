import React from "react";
import PropTypes from "prop-types"
//import  Button  from "bootstrap";

class Nombre extends React.Component{

    componentDidMount(){
        alert('te damos la bienvenida' + this.props.nombre);
    }

    componentWillUnmount(){
        alert('adios');
    }

    render(){
        return(
            <div>
                {this.props.nombre}
                <buton onClick={this.props.borrarNombreDeLista}>
                    X
                </buton>
            </div>
        )
    }   
}

Nombre.propTypes ={
    nombre: PropTypes.string.isRequired,
    borrarNombreDeLista: PropTypes.func.isRequired
}

export default Nombre;