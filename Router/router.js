import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from '../screens/index.js';

const routes = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='Home' component={Main} title='Main' initial={true} />
      </Scene>
    </Router>
  );
}

export default routes;