import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { appStyles as styles } from "./styles"

function App() {

  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };
  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    < SafeAreaView style={{ flex: 1 }} >
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks ({text})</Text>
        <Text style={styles.subtitle}>Enter your tasks in the box below and press the "Add" button to add.</Text>
        <TextInput
          onChangeText={setText}
          style={styles.input}
          value={text}
          placeholder="Enter your taks here.." />
        <TouchableOpacity
          onPress={handleAddTaskPress}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <FlatList
          data={tasks}
          renderItem={({ item, index }) =>
          (<View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteTaskPress(index)}
              style={styles.taskDelete}>
              <Text style={styles.taskDeleteText}>X</Text>
            </TouchableOpacity>
          </View>)}
          keyExtractor={(item) => item + Date.now() + Math.random()} />
      </View>
    </SafeAreaView >

  )
}

export default App;