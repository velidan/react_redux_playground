export function showActive(id) {

	return {
		type : "SHOW_ACTIVE",
		payload : id
	}
}

export function showAll(id) {

	return {
		type : "SHOW_ALL",
		payload : id
	}
}

export function showCompleted(id) {

	return {
		type : "SHOW_COMPLETED",
		payload : id
	}
}


export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})