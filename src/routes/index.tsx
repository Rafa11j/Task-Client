import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import TaskListForm from '../pages/TaskListForm';
import TaskItem from '../pages/TaskItem';
import TaskItemForm from '../pages/TaskItemForm';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" exact component={TaskListForm} />
      <Route path="/:id/itens" exact component={TaskItem} />
      <Route path="/:id/itens/cadastro" exact component={TaskItemForm} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
