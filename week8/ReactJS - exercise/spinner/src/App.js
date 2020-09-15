import React, { Component } from "react";
import "./App.css";
import Spinner from "./Spinner";

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  };
  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <Spinner /> : <h1>TADAAAAAAAAA </h1>}
      </div>
    );
  }
}

export default App;
