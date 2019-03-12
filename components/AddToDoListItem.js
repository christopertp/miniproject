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
  TextInput,
  TouchableOpacity
} from "react-native";
import DateTime from "./DateTime";

export default class AddToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { noteText: "your", date: Date() };
  }

  onChangeDate(newDate) {
    this.setState({
      date: newDate
    });
  }

  render() {
    return (
      <View style={styles.newToDoListContainer}>
        <Text>Task Name</Text>
        <TextInput
          style={styles.newTodoListText}
          placeholder="Enter note name here"
          placeholderTextColor="lightgrey"
          underlineColorAndroid="transparent"
        />
        <Text>Date</Text>
        <DateTime
          date={this.state.date}
          onChangeDate={this.onChangeDate.bind(this)}
        />
        <View style={styles.newToDoListStatusContainer}>
          <Text>Status</Text>
          <CheckBox value={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newToDoListContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    // backgroundColor: "brown",
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12
    // backgroundColor: "#68a0cf"
  },
  newToDoListStatusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});
