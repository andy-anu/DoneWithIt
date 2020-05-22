import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Todos = ({ todos, handleDelete }) => {
  const todolist = todos.length ? (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.item}>{item.content}</Text>
        </TouchableOpacity>
      )}
    />
  ) : (
    <Text style={styles.left_item}>No Todos left</Text>
  );
  return <View>{todolist}</View>;
};

export default Todos;

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "skyblue",
    fontSize: 24,
  },
  left_item: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "green",
    fontSize: 24,
  },
});
