/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

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
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeComponent from "./components/Home";
import ListToDoItem from "./components/ListToDoItem";
import AddToDoListItem from "./components/AddToDoListItem";

let data = {
  noteArray: [],
  text: "test"
};

let item = {
  name: "",
  date: "",
  isChecked: false
};

addNewToDo = newItem => {
  console.log("tesing");
  // noteArray.push(newItem);
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

const Home = createStackNavigator({
  Home: {
    screen: param => {
      // console.log(param);
      // console.log(data.total);
      return <HomeComponent data={data} />;
    },
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home"
      };
    }
  }
});

const List = createStackNavigator({
  List: {
    screen: ListToDoItem,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "To Do List",
        headerRight: (
          <TouchableHighlight
            style={styles.createNewToDoItemButton}
            onPress={() => navigation.navigate("AddToDoListItem")}
            underlayColor="#fff"
          >
            <Text style={[styles.createNewToDoItemText]}> + </Text>
          </TouchableHighlight>
        )
      };
    }
  },
  AddToDoListItem: {
    screen: param => {
      // console.log(param);
      return <AddToDoListItem />;
    },
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Create New Task",
        headerRight: (
          <TouchableHighlight
            style={styles.saveNewToDoItemButton}
            onPress={() =>
              navigation.navigate("List", {
                addNewToDo: this.addNewToDo.bind(this)
              })
            }
            underlayColor="#fff"
          >
            <Text style={[styles.saveNewToDoItemText]}> Save </Text>
          </TouchableHighlight>
        )
      };
    }
  }
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    List,
    Home
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 18,
        marginBottom: 12
      }
    }
  }
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  createNewToDoItemButton: {
    borderRadius: 20,
    borderWidth: 1,
    margin: 5,
    width: 40,
    marginRight: 16,
    borderColor: "#000"
  },
  createNewToDoItemText: {
    margin: 4,
    color: "#000",
    textAlign: "center",
    fontSize: 22
  },
  saveNewToDoItemText: {
    marginRight: 18
  }
});
