import React from 'react-native';
import { Actions } from 'react-native-router-flux';
import Render from './Render';

const {
  Component,
  StyleSheet,
} = React;

const baseStyles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  header: {
    // textAlign: 'center',
    paddingLeft: 25,
    fontSize: 20,
    marginBottom: 20,
  },
});

class Index extends Component {
  render() {
    return Render.bind(this)(baseStyles);
  }
}

export default Index;
