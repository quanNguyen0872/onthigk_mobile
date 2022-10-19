import { useContext } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoList from './components/TodoList';
import { addTodo, setTodoInput } from './store/Action';
import TodoContext from './store/Context';
import Provider from './store/Provider';

function App() {
  const {state, dispatch} = useContext(TodoContext);
  // Alert.alert("state", JSON.stringify(state));
  const { todoInput} = state;

  const handleAddTodo = () => {
     dispatch(addTodo(todoInput));
     dispatch(setTodoInput(""));
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <TextInput
          style={{
            border: 1,
            borderColor: "black",
            flex: 1,
            borderWidth: 1,
          }}
          placeholder="Nhap Cong Viec"
          value={todoInput}
          onChangeText={(text) => dispatch(setTodoInput(text))}
        />
        <Button title="Add" onPress={handleAddTodo}/>
      </View>
      <TodoList />
    </View>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
