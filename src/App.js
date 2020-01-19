import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  // Managed from inside component
  state = {
    persons: [
      { name: "Cameron", age: 24 },
      { name: "Robert", age: 22 },
      { name: "Alexander", age: 21 },
      { name: "Clifford", age: 19 }
    ],
    otherState: "some other value"
  };

  //Switch Name
  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: "Cam", age: 24 },
        { name: "Rob", age: 22 },
        { name: "Alex", age: 21 },
        { name: "Cliff", age: 19 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <p>App</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbies: Modeling
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        >
          My Hobbies: Smoking
        </Person>
      </div>
    );
  }
}

export default App;
