import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }
  incrementIfEven = () => {
    if (this.props.value % 2 === 0) {
      this.props.onIncrement()
    }
  }
  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props
    //console.log(this.props)
    return (
      <div>
        Current Value is {value}
        <div>
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
        </div>
        <div>
          <button onClick={this.incrementIfOdd}>Increment if odd</button>
          <button onClick={this.incrementIfEven}>Increment if even</button>
        </div>
        <div>
          <button onClick={this.incrementAsync}>Increment async</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
