import React from 'react-native';

const {
  Component,
  StyleSheet,
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
  onChangeText(text) {
    this.setState({ text }); // eslint-disable-line
  }

  onChangePassword(password) {
    this.setState({ password }); // eslint-disable-line
  }

  render() {
    return Render.bind(this)(baseStyles);
  }
}
