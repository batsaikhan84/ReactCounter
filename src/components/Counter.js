import { Component } from "react"

class Counter extends Component {
    constructor() {
        super()
        this.state = {
          count: 0
        }
      }
      increment = () => {
        this.setState({
          count: this.state.count + 1
        })
      }
      decrement = () => {
        this.setState({
          count: this.state.count - 1
        })
      }
      reset = () => {
        this.setState({
          count: 0
        })
      }
      render() {
        return (
          <div className = "counterContainer">
            { this.state.count }
            <button className = "decrement" onClick = { this.decrement }>-</button>
            <button className = "reset" onClick = { this.reset }>Reset</button>
            <button className = "increment" onClick = { this.increment }>+</button>
            <button className = "countStart" onClick = { this.counterStart }>Start</button>
            <button className = "countStop" onClick = { this.couonterStop }>Stop</button>
            
          </div>
        )
      }
      counterStart = () => {
        
      }
      couonterStop = () => {
        clearInterval(this.myInterval)
      }

}

export default Counter