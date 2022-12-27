import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import data from "./staticData";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            What{" "}
            <Text style={{ fontWeight: "300", color: colors.green }}>
              To Do
            </Text>{" "}
            ?
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 40 }}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={colors.green} />
          </TouchableOpacity>
          <Text style={styles.add}>Add ToDo</Text>
        </View>
        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            vertical={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightGreen,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 14,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 20,
    alignItems: "center",
    padding: 16,
    justifyContent: "center",
  },
  add: {
    color: colors.black,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
