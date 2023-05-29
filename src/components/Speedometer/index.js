import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  onBrake = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="bgContainer">
        <h1 className="heading">speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="image"
          alt="speedometer"
        />
        <h3 className="counter">Speed is {count}mph</h3>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnBox">
          <button
            type="button"
            className="accelerateBtn"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="brakeBtn" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
