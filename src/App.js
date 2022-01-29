import React from "react";
import { Switch, Route } from "react-router-dom";
import Exlpore from "./pages/explore/Exlpore";
import TopicInformationPage from "./pages/topicInformationPage/TopicInformationPage";
import AppLayout from "./AppLayout";
import Editorial from "./pages/editorial/Editorial";
import SearchPhotos from "./pages/searchPhotos/SearchPhotos";
import PreviewCollectionPhotos from "./pages/previewCollectionPhotos/PreviewCollectionPhotos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <Editorial/>
          </Route>
          <Route exact path="/explore">
            <Exlpore/>
          </Route>
          <Route exact path="/t/:topicInformationPage">
            <TopicInformationPage/>
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
