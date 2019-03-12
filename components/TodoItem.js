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

checkBoxTest = () => {
  console.log("masuk pa eko");
  alert("asd");
};

export default class ToDoItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.toDoItemContainer}>
        <View style={styles.toDoItemLeftContainer}>
          <CheckBox value={true} onValueChange={this.checkBoxTest} />
          <Text style={[styles.toDoItemText, styles.toDoItemName]}>
            {item.name}
          </Text>
        </View>
        <View style={styles.toDoItemRightContainer}>
          <Text style={[styles.toDoItemText, styles.toDoItemDate]}>
            {item.date}
          </Text>
          <TouchableHighlight
            style={styles.toDoItemDeleteButton}
            onPress={() => alert("testing")}
            underlayColor="#fff"
          >
            <Text style={[styles.toDoItemDeleteText]}> X </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toDoItemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    // backgroundColor: "yellow",
    height: 38,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    // backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1
  },
  toDoItemLeftContainer: {
    flex: 4,
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "green",
    fontSize: 5
  },
  toDoItemText: {
    fontSize: 20
  },
  toDoItemName: {
    marginLeft: 1
  },
  toDoItemDate: {
    fontSize: 12,
    marginRight: 8
  },
  toDoItemRightContainer: {
    flex: 1.2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end"
    // backgroundColor: "grey"
  },
  toDoItemDeleteButton: {
    // width: 100,
    // height: 100,
    // borderRadius: 50
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
    marginTop: 3,
    marginRight: 8,
    borderColor: "#000"
  },
  toDoItemDeleteText: {
    margin: 4,
    color: "#000",
    textAlign: "center"
  },
  saveNewToDoItemButton: {
    margin: 5,
    width: 120,
    marginRight: -10
  },
  saveNewToDoItemText: {
    margin: 4,
    color: "#000",
    textAlign: "center",
    fontSize: 22
  }
});
