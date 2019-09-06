import React from 'react'
import { createStore } from 'redux'
import Counter from '../src/components/Counter'
import reducer from '../src/reducers/index'

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    )
  }
}

export default App
