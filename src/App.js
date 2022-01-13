import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Exlpore from "./pages/Exlpore";
import TopicInformationPage from "./pages/TopicInformationPage";
import AppLayout from "./AppLayout";
import Editorial from "./pages/Editorial";
import "./App.css";

function App() {
  return (
    <div>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <Editorial />
          </Route>
          <Route exact path="/explore">
            <Exlpore />
          </Route>
          <Route exact path="/t/:topicInformationPage">
            <TopicInformationPage />
          </Route>        
        </Switch>
      </AppLayout>
    </div>
  );
}

export default App;
