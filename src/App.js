import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

function App() {
  // debugger;
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Navbar />
        <div className="app__wrapper--content">
          <Switch>
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/feed" render={() => <Feed />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" render={() => <LoginPage />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
