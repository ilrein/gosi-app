import React from 'react-native';
import Render from './Render';

const {
  Component,
  StyleSheet,
} = React;

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

class Index extends Component {
  render() {
    return Render.bind(this)(baseStyles);
  }
}

export default Index;
