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


const todo = (state, action) => {

	switch (action.type) {
		case "ADD_TODO":
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case "TOGGLE_TODO": 
		      if (state.id !== action.id) {
		        return state
		      }

		      return Object.assign( {}, state, { completed: !state.completed } )

		default:
			return state;
	}
}


const todos = (state = initialState, action) => {


	switch (action.type) {
		case "ADD_TODO":
			return [
		        ...state,
		        todo(undefined, action)
		      ]
		case "TOGGLE_TODO":
	      	return state.map(t =>
		        todo(t, action)
	      	)

		default:
			return state;
	}

	
}

export default todos;