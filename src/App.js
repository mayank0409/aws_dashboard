import React from "react";
import SideBar from "./components/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EC2 from "./components/services/ec2";
import ECSCluster from "./components/services/ecs-cluster";
import LB from "./components/services/lb";
import LT from "./components/services/lt";
import NG from "./components/services/ng";
import S3 from "./components/services/s3";
import SG from "./components/services/sg";

import "./App.css";

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>AWS Global Dashboard</h1>
      </div>
      <Router>
        <Switch>
          <Route path="/ec2">
            <EC2 />
          </Route>
          <Route path="/ecs-cluster">
            <ECSCluster />
          </Route>
          <Route path="/lb">
            <LB />
          </Route>
          <Route path="/lt">
            <LT />
          </Route>
          <Route path="/ng">
            <NG />
          </Route>
          <Route path="/s3">
            <S3 />
          </Route>
          <Route path="/sg">
            <SG />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
