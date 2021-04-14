import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import Profile from "./components/Profile/Profile";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  // debugger;
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <div className="app__wrapper--content">
          <Switch>
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/feed" component={Feed} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
