import React from 'react-native';

const {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

const localStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
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
    paddingLeft: 10,
    height: 40,
  },
  label: {
    fontSize: 15,
    paddingLeft: 20,
  },
  submit: {
    textAlign: 'center',
    backgroundColor: 'aquamarine',
  },
});

export default function render(baseStyles) {
  return (
    <View
      style={baseStyles.container}
    >
      <TouchableHighlight
        onPress={this.props.goToIndex}
      >
        <Text
          style={baseStyles.header}
        >
          Back to index
        </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <View>
          <Text
            style={localStyles.label}
          >
            Choose Username
          </Text>
          <TextInput
            onChangeText={this.onChangeText.bind(this)}
            style={localStyles.buttonContainer}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View>
          <Text
            style={localStyles.label}
          >
            Choose Password
          </Text>
          <TextInput
            onChangePassword={this.onChangePassword.bind(this)}
            style={localStyles.buttonContainer}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View>
          <Text
            style={[localStyles.buttonContainer, localStyles.submit]}
          >
            Submit
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
