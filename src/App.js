import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Exlpore from "./pages/Exlpore";
import TopicInformationPage from "./pages/TopicInformationPage";
import AppLayout from "./AppLayout";
import Editorial from "./pages/Editorial";
import SearchPhotos from "./pages/SearchPhotos";
import PreviewCollectionPhotos from "./pages/PreviewCollectionPhotos";
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
          <Route exact path="/s/photos/:searchPhotos">
            <SearchPhotos type="photos" />
          </Route>
          <Route exact path="/s/collections/:searchPhotos">
            <SearchPhotos type="collections" />
          </Route>
          <Route exact path="/collections/:id">
            <PreviewCollectionPhotos />
          </Route>
        </Switch>
      </AppLayout>
    </div>
  );
}

export default App;
