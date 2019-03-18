import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Library from "./scenes/Library";
import store from './redux'
import { Provider } from 'react-redux'

class App extends Component {
  callApi = async () => {
    const result = await fetch("/songs", {});
    const data = await result.json();
    console.log(data);
  };
  render() {
          return <Provider store={store}><Library /></Provider>
  }
}

export default App;
