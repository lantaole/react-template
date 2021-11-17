import React from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";


import UserList from './UserList'
import WorkList from './WorkList'


const Index: React.FC = () => {

  return (
    <Switch>
      <Route exact path="/home/list">
        <Redirect to="/home/list/UserList" />
      </Route>
      <Route
        path="/home/list/UserList"
        component={UserList}
      />
      <Route
        path="/home/list/WorkList"
        component={WorkList}
      />
    </Switch>
  );
};

export default Index;
