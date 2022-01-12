import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Exlpore from "./pages/Exlpore";
import TopicInformationPage from "./pages/TopicInformationPage";
import Demo from "./components/Demo";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Exlpore />
          </Route>
          <Route exact path="/t/:topicInformationPage">
            <TopicInformationPage />
          </Route>
          <Route exact path="/demo">
            <Demo />
          </Route>
        </Switch>
      </AppLayout>
    </div>
  );
}

export default App;
