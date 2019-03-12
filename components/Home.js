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

export default class HomeComponent extends Component {
  render() {
    const { total } = this.props;
    console.log(this.props.data.noteArray);
    return (
      <View style={styles.totalContainer}>
        <View style={styles.totalTextContainer}>
          <Text style={styles.totalText}>Total to do list done{"  "}</Text>
          <Text style={styles.totalText}>Total to do list waiting{"  "}</Text>
          <Text style={styles.totalText}>Total all to do list{"  "}</Text>
        </View>
        <View style={styles.totalCounterContainer}>
          {/* <Text style={styles.totalCounter}>{total.totalDone}</Text>
          <Text style={styles.totalCounter}>{total.totalWaiting}</Text>
          <Text style={styles.totalCounter}>
            {total.totalDone + total.totalWaiting}
          </Text> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  totalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
    margin: 20
  },
  totalTextContainer: {
    flex: 4,
    height: 190
  },
  totalCounterContainer: {
    flex: 1,
    height: 200
  },
  totalText: {
    flex: 1,
    fontSize: 24,
    height: 10
  },
  totalCounter: {
    fontSize: 44
  }
});
