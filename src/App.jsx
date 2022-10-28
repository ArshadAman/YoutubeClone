import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Feed, Navbar, Sidebar, SearchResults } from "./components";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/results/:searchTerm">
            <SearchResults/>
          </Route>
          <Route exact path="/">
            <Feed />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
