import React from 'react-native';

const {
  AsyncStorage,
} = React;

import { Scene, Router } from 'react-native-router-flux';

import Index from './components/index/Index';
import LoginView from './components/loginView/LoginView';
import SignupView from './components/signupView/SignupView';

import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication/client';

// This is required for socket.io-client due to a bug in React Native debugger
if (window.navigator && Object.keys(window.navigator).length === 0) {
  window = Object.assign(window, {navigator: {userAgent: 'ReactNative'}}); // eslint-disable-line
}

const io = require('socket.io-client/socket.io');

export default class gosi extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.state = { connected: false };
    // const options = { transports: ['websocket'], forceNew: true };
    // const socket = io('http://localhost:3030', options);
    //
    // this.app = feathers()
    //   .configure(socketio(socket))
    //   .configure(hooks())
    //   .configure(authentication({
    //     storage: AsyncStorage,
    //   }));
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            app={this.app}
            component={Index}
            key="home"
            title="Gosi"
          />
          <Scene
            app={this.app}
            component={LoginView}
            key="login"
            title="Login"
          />
          <Scene
            app={this.app}
            component={SignupView}
            key="signup"
            title="Sign Up"
          />
        </Scene>
      </Router>
    );
  }
}
