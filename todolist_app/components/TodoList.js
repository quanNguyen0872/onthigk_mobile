import React, { useContext } from 'react'
import { View } from "react-native";
import TodoContext from '../store/Context';
import TodoItem from './TodoItem';

function TodoList() {
	const { state } = useContext(TodoContext);
  const { todoList } = state;
  return (
    <View>
      {todoList.map((todo, index) => {
        return <TodoItem key={index} todo={todo} index={index} />;
      })}
    </View>
  );
}

export default TodoList