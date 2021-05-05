import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    //! this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  /**
   * ! Alert
   * * If we declate function like below then
   * * this keyword wont be recognizable because we are extending Component *Class*
   * * and This Component class has no method naming handleChange.
   * * So we have to register in this context (this) .
   */

  /*
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  */

  //TODO: We should use Arrow Function. Because it auto binds the function to the Component

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster RoloDex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
