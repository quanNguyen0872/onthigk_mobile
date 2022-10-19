export const setTodoInput = (payload) => {
	return {
		type: "SET_TODO_INPUT",
		payload,
	};
};

export const addTodo = (payload) => {
	return {
		type: "ADD_TODO",
		payload,
	};
};

export const deleteTodo = (payload) => {
	return {
		type: "DELETE_TODO",
		payload,
	}
}