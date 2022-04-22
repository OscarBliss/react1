import React from 'react';
import Boton from "./boton";

class ContadorClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    }

    handleClick =()=>{
        //se actualiza el estado inicial
        this.setState({
            //linea de ejecucion
            contador:this.state.contador +1
        })
    }

    render(){
        return(
            <>
                <div>
                {this.state.contador}
                   <br/>
                    <Boton
                    texto={this.state.contador}
                    handleClick={this.handleClick}
                    />
                   
                </div>
            </>
        )
    }
} 

export default ContadorClass;