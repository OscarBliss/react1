import './App.css';
import React from 'react';
import ContadorClass from './Components/CicloDeVida/contador';
import ContadorHook from './Components/SesionHooks/contador2';
import ListadeNombres from "./Components/CicloDeVida/ListaNombre";
import MainApp from './Components/SesionHooks/ListaNombresHook';

function App() {
  return (
    <div className="App">
      <ContadorClass/>
      <br/> <br/>
      <ContadorHook/>
      <br/> <br/>
      <ListadeNombres/>
      <br/> <br/>
      <MainApp/>
    </div>
  );
}

export default App;
