import React from 'react-native';

const {
  Component,
  StyleSheet,
  AsyncStorage,
} = React;

import Render from './Render';

const baseStyles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default class SignupView extends Component {
  constructor(props, context) {
    super(props, context);
    this.app = this.props.app;
  }

  onChangeText(text) {
    this.setState({ text }); // eslint-disable-line
  }

  onChangePassword(password) {
    this.setState({ password }); // eslint-disable-line
  }

  onSubmit() {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    // this.app.service('users').create(userData).then((result) => {
    //   this.app.authenticate({
    //
    //   })
    // });
  }

  render() {
    return Render.bind(this)(baseStyles);
  }
}
