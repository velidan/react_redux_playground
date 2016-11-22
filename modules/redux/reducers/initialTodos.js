const initialState = { 
	todos : [
			  {
			    id : 0,
			    text : "TODO 1",
			    completed : false
			  },
			    {
			    id : 1,
			    text : "TODO 2",
			    completed : true
			  },
			    {
			    id : 2,
			    text : "TODO 3",
			    completed : false
			  }
			]

		  }


export default function initialTodos(state = initialState, action) {
	console.log(state, action);

	switch (action.type) {
		case "SHOW_ACTIVE":
			return {
				todos : state.todos.filter(o => !o.completed)
			}
		case "SHOW_ALL":
			return {
				todos : initialState.todos
			}
		case "SHOW_COMPLETED":
			return {
				todos : state.todos.filter(o => o.completed)
			}

		default:
			return state;
	}

	
}