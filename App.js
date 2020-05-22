import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Todos from "./todos";
import FormInput from "./form_input";
export default class App extends Component {
  state = {
    todos: [],
  };

  handleContent = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  handleDelete = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id != id);
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.todos_head}>Todo's</Text>
        <FormInput handleContent={this.handleContent} />
        <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
        <Text style={{ color: "red" }}>
          To remove item from todo list click on the item.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 200,
  },
  but: {
    marginVertical: 8,
  },
  todos_head: {
    fontSize: 60,
    textAlign: "center",
  },
});
