import React from 'react'
import Counter from '../src/components/Counter'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    //console.log(this.props)
    return (
      <div>
        <Counter
          value={this.props.state}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
