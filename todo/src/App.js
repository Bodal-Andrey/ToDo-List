import React, { Fragment } from 'react';
import Title from './components/title';
import ToDo from './containers/todo';

const App = () => (
  <Fragment>
    <Title title="ToDo App" />
    <ToDo />
  </Fragment>
);

export default App;
