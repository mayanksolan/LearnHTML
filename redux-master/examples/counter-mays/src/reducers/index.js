const reducer = (state = 0, action) => {
  let newState = state
  switch (action.type) {
    case 'INCREMENT':
      return newState + 1
    case 'DECREMENT':
      return newState - 1
    default:
      return newState
  }
}

export default reducer
