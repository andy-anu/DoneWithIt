import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
class FormInput extends Component {
  state = {
    content: "",
  };

  submit = () => {
    this.props.handleContent(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <View>
        <Text>Enter your Todo:</Text>
        <TextInput
          placeholder="e.g. Buy Grocery"
          onChangeText={(val) => this.setState({ content: val })}
          value={this.state.content}
        />
        <Button title="Add Todo" onPress={this.submit} />
      </View>
    );
  }
}

export default FormInput;
