import React from "react";
import Example from "./components/Example";
import Animal from "./components/Animal";
import animals from "./animals.js";
import Logo from './components/Logo.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    let bunchOfAnimals = animals.map((animal) =>
      <Animal key={animal.src} src={animal.src} alt={animal.slt} title={animal.title} modifier={animal.modifier} />
    );

    return (
      <div>
        <Logo />
        {bunchOfAnimals}
      </div>
    );
  }
}

export default App;
