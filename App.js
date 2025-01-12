import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { FlatList } from "react-native-web";
import styles from "./styles";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    if (value.trim()) {
      setTasks([...tasks, { text: value, completed: false }]);
      setValue("");
    }
  };

  const handleDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your task"
          value={value}
          onChangeText={(e) => {
            setValue(e);
          }}
        />

        <TouchableHighlight onPress={handleClick}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableHighlight>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={[styles.task, item.completed && styles.completedItem]}>
              {item.text}
            </Text>
            <TouchableHighlight onPress={() => handleDone(index)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Done</Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
}
