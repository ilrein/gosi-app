import React, {
  AsyncStorage,
  Component,
  Navigator,
} from 'react-native';

import Index from './components/index/Index';
import LoginView from './components/loginView/LoginView';
import SignupView from './components/signupView/SignupView';

import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication/client';

// This is required for socket.io-client due to a bug in React Native debugger
if (window.navigator && Object.keys(window.navigator).length === 0) {
  // window = Object.assign(window, {navigator: {userAgent: 'ReactNative'}}); // eslint-disable-line
  window.navigator.userAgent = 'ReactNative';
}

const io = require('socket.io-client/socket.io');

export default class gosi extends Component {
  constructor(props, context) {
    super(props, context);

    const options = { transports: ['websocket'], forceNew: true };
    const socket = io('http://localhost:3030', options);

    this.state = { connected: false };
    this.app = feathers()
      .configure(socketio(socket))
      .configure(hooks())
      .configure(authentication({
        storage: AsyncStorage,
      }));
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  goToLoginView() {
    this.nav.push({
      name: 'login',
    });
  }

  goToSignupView() {
    this.nav.push({
      name: 'signup',
    });
  }

  goToIndex() {
    this.nav.pop();
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'signup':
        return (
          <SignupView
            goToIndex={this.goToIndex.bind(this)}
            name={route.name}
          />
        );
      case 'login':
        return (
          <LoginView
            goToIndex={this.goToIndex.bind(this)}
            name={route.name}
          />
        );
      default:
        return (
          <Index
            goToLoginView={this.goToLoginView.bind(this)}
            goToSignupView={this.goToSignupView.bind(this)}
            name={route.name}
          />
        );
    }
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'index', index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
