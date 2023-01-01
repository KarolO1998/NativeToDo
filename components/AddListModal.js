import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";
import data from "../staticData";

export default class AddListModal extends React.Component {
  backgroundColors = [
    "#000000",
    "#14d36d",
    "#55ffa4",
    "#14e3cb",
    "#bf14e3",
    "#ff9100",
  ];
  state = {
    name: "",
    color: this.backgroundColors[1],
  };

  createTodo = () => {
    const { name, color } = this.state;

    data.push({
      name,
      color,
      todos: [],
    });

    this.setState({ name: "" });
    this.props.closeModal();
  };

  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity style={{ position: "absolute", top: 64, right: 32 }}>
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={{ alignSelf: "center", alignContent: "center" }}>
          <Text style={styles.title}>Create ToDo List</Text>
          <TextInput
            style={styles.input}
            placeholder="List Name?"
            onChangetext={(text) => this.setState({ name: text })}
          />
          <View
            style={{
              flexDirector: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            {this.renderColors()}
          </View>
          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]} onPress={this.createTodo}
          >
            <Text style={{ color: colors.white, fontWeight: "600" }}>
              Create!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.green,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.purple,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 12,
    alignSelf: "stretch",
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 6,
  },
});
