import React from 'react-native';
const Actions = require('react-native-router-flux').Actions;

const {
  View,
  Text,
  TouchableHighlight,
} = React;

const localStyle = React.StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
});

export default function render(baseStyle) {
  return (
    <View
      style={baseStyle.container}
    >
      <Text
        style={baseStyle.header}
      >
        Welcome to Logistics!
      </Text>
      <TouchableHighlight
        onPress={Actions.login}
        style={localStyle.buttonContainer}
      >
        <Text>
          Login
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={Actions.signup}
        style={localStyle.buttonContainer}
      >
        <Text>
          Signup
        </Text>
      </TouchableHighlight>
    </View>
  );
}
