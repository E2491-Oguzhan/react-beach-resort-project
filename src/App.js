import React from "react";
import "./App.css";
import { Home, Rooms, Error } from "../src/pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleRoom from "../src/pages/SingleRoom";
import Navbar from "../src/components/Navbar";
import { RoomProvider } from "./context";

const App = () => {
  return (
    <RoomProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </RoomProvider>
  );
};

export default App;
