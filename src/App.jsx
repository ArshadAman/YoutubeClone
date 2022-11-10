import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Feed, Navbar, SearchResults, VideoView } from "./components";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/results/:searchTerm">
            <SearchResults/>
          </Route>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route exact path="/watch/:id">
            <VideoView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
