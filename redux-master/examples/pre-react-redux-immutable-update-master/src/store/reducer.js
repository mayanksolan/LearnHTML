const initialState = {
  age: 20,
  history: []
}

const reducer = (state = initialState, action) => {
  //const newState = { ...state }

  switch (action.type) {
    case 'AGE_UP':
      return {
        ...state,
        age: state.age + action.value,
        history: [
          ...state.history,
          { id: Math.random(), age: state.age + action.value }
        ]
      }

    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age - action.value,
        history: [
          ...state.history,
          { id: Math.random(), age: state.age - action.value }
        ]
      }

    case 'DELETE':
      return {
        ...state,
        history: state.history.filter(elem => elem.id !== action.key)
      }

    default:
      return {
        ...state
      }
  }
  //return newState
}

export default reducer
