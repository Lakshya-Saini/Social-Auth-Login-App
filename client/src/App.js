import React, { Component } from "react";
import io from "socket.io-client";
import OAuth from "./components/oauth/OAuth";
import { API_URL } from "./components/config/keys";
import "./App.css";

const socket = io(API_URL);
const providers = ["google", "facebook", "github"];

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="App-header">
          {providers.map((provider) => (
            <OAuth key={provider} provider={provider} socket={socket} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
