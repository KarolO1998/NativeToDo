import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import data from "./staticData";
import TodoList from "./components/TodoList";
import AddListModal from "./components/AddListModal";

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    lists: data
  };

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  renderList = list => {
    return <TodoList list={list} updateList={this.updateList} />
  };

  addList = list => {
    this.setState({ lists: [...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }] })
  };

  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id ===list.id ? list : item
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
        </Modal>
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
          <TouchableOpacity
            style={styles.addList}
            onPress={() => this.toggleAddTodoModal()}
          >
            <AntDesign name="plus" size={16} color={colors.green} />
          </TouchableOpacity>
          <Text style={styles.add}>Add ToDo</Text>
        </View>
        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={(item) => item.name}
            vertical={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
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
