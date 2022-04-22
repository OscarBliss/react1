import React,{useState} from "react";
import Boton from "../CicloDeVida/boton";

const ContadorHook = (props) => {

//el hook useState() nos da 2 ins

    const [contador, setContador] = useState(100);
        

    const handleClick = ()=>{
        setContador(
            contador+1
        )
    }

    return(
        <div>
            estado con hooks
            <br/>
            {contador}
            <br/>
            <Boton
                texto={contador}
                handleClick={handleClick}
            />
        </div>
    )
    
}

export default ContadorHook;