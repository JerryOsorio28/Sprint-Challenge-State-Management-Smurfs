import React from "react";
import "./App.css";

//Import Components
import SmurfsList from './components/smurfsList';
import SmurfForm from './components/smurfsForm'; 

const App = () => {

    return (
      <div className="App">
        <h1>SMURFS LIST!</h1>
        <SmurfForm />
        <SmurfsList />
      </div>
    );
}

export default App;
