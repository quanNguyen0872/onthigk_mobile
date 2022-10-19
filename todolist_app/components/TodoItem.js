import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { deleteTodo } from '../store/Action';
import TodoContext from '../store/Context';

function TodoItem({todo, index}) {
	const {dispatch} = useContext(TodoContext);
	const handleDeleteTodo = () => {
		dispatch(deleteTodo(index));
	}
  	return (
	 	<View>
			<TouchableOpacity onPress={handleDeleteTodo}>
				<Text>{todo}</Text>
			</TouchableOpacity>
	 	</View>
  	)
}

export default TodoItem