const initState ={
	todoInput: "",
	todoList: [],
};

const reducer = (state, action) => {
	switch(action.type) {
		case "SET_TODO_INPUT":
			return {
				...state,
				todoInput: action.payload,
			}
		case "ADD_TODO":
			return {
				...state,
				todoList: [...state.todoList, action.payload]
			}
		case "DELETE_TODO":
			const todos = [...state.todoList];
			todos.splice(action.payload, 1)
			return {
				 ...state,
				 todoList: todos,
			}
	}
};

export {initState};
export default reducer;