import React,{useState} from "react";

const MainApp = ()=>{
    const [nombre, setNombre] = useState('');

    const [state,setState] = useState({
        profe:0,
        alumnos:0
    });

    const editarNombre =(event)=>{
        setNombre(event.target.value)
    }


    const editarState = (atributo) => (event) => setState({
        ...state,
        [atributo]: event.target.value
    })


    // const editarProfe= (event) =>
    //     setState({
    //         ...state,
    //         profe: event.target.value
    //     })

    // const editarAlumno = (event) =>
    //     setState({
    //         ...state,
    //     alumnos:event.target.value 
    //     })
        

    return(
        <div>
           <input onChange={editarNombre}/>
           {nombre}
           <br/>

           <input type='number'  onChange={editarState('alumnos')}/>
            {state.alumnos}
           <br/>

           <input type='number' onChange={editarState('profe')}/>
           {state.profe}
           <br/>

        </div>
    )
}

export default MainApp;