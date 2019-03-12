import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  CheckBox,
  TouchableHighlight,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import ToDoItem from "./TodoItem";

const item = {
  name: "Task 1",
  date: "08/03/2019",
  checked: false
};

export default class ListToDoItem extends Component {
  // saveToDoItem = () => {
  //   console.log("masuk pa eko");
  //   alert("asd");
  // };

  render() {
    if (this.props.navigation.state.params != undefined) {
      console.log(this.props.navigation.state.params.addNewToDo());
    }
    // const parameter = this.props.navigation.state.params;
    // if (parameter != undefined) this.saveToDoItem();
    return (
      <View style={styles.listContainer}>
        <ToDoItem item={item} />
        <ToDoItem item={item} />
        <ToDoItem item={item} />
        <ToDoItem item={item} />
        <ToDoItem item={item} />
        <ToDoItem item={item} />
        <ToDoItem item={item} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "flex-start"
    // backgroundColor: "pink"
  }
});
