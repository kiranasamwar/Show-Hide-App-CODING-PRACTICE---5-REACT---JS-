import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  hideFirstName = () => {
    this.setState(prevFirstName => ({
      showFirstName: !prevFirstName.showFirstName,
    }))
    console.log('k')
  }

  hideLastName = () => {
    this.setState(prevLasName => ({
      showLastName: !prevLasName.showLastName,
    }))
    console.log('k')
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="car2-container">
          <div className="card-container">
            <button
              className="button"
              onClick={this.hideFirstName}
              type="button"
            >
              Show/Hide Firstname
            </button>

            {showFirstName && <p className="first-name">Joe</p>}
          </div>
          <div className="card-container">
            <button
              className="button"
              onClick={this.hideLastName}
              type="button"
            >
              Show/Hide Lastname
            </button>

            {showLastName && <p className="first-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
