import React from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Index from './components/index/Index';
import LoginView from './components/loginView/LoginView';
import SignupView from './components/signupView/SignupView';

export default class gosi extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { connected: false };
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            component={Index}
            key="home"
            title="Gosi"
          />
          <Scene
            component={LoginView}
            key="login"
            title="Login"
          />
          <Scene
            component={SignupView}
            key="signup"
            title="Sign Up"
          />
        </Scene>
      </Router>
    );
  }
}
