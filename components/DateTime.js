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
import DateTimePicker from "react-native-modal-datetime-picker";

export default class DateTime extends Component {
  constructor(props) {
    super();
    this.state = {
      isDateTimePickerVisible: false,
      setDate: "12/30/2018"
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    // console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
    // const parseDate = date.replace(/\//g, "-");
    console.log(this.props);
    const parseDate = date.toLocaleDateString();
    this.setState({ setDate: parseDate });
    this.props.onChangeDate(parseDate);
    // console.log(date);
  };

  render() {
    const date = this.props;
    // console.log(date);
    return (
      <View>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={styles.newTodoListText}>{this.state.setDate}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newTodoListText: {
    fontSize: 22
  }
});
