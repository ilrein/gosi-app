import React from 'react-native';

const {
  AsyncStorage,
} = React;

import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication/client';

// This is required for socket.io-client due to a bug in React Native debugger
if (window.navigator && Object.keys(window.navigator).length === 0) {
  window = Object.assign(window, {navigator: {userAgent: 'ReactNative'}}); // eslint-disable-line
}

const io = require('socket.io-client/socket.io');

export default class AuthContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {};

    const options = { transports: ['websocket'], forceNew: true };
    const socket = io('http://localhost:3030', options);
    this.app = feathers()
      .configure(socketio(socket))
      .configure(hooks())
      .configure(authentication({
        storage: AsyncStorage,
      }));
  }

  render() {
    return null;
  }
}
