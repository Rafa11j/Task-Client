import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import TaskListForm from '../pages/TaskListForm';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" exact component={TaskListForm} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
