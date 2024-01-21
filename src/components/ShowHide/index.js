// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickFirstNameButton = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastNameButton = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    const fName = firstName ? 'Joe' : ''
    const lName = lastName ? 'Jonas' : ''
    const fn = firstName ? 'first-name' : ''
    const ln = lastName ? 'last-name' : ''

    return (
      <div className="bg">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="a">
          <div>
            <button
              type="button"
              className="first-name-button"
              onClick={this.onClickFirstNameButton}
            >
              Show/Hide Firstname
            </button>
            <p className={fn}>{fName}</p>
          </div>
          <div>
            <button
              type="button"
              className="last-name-button"
              onClick={this.onClickLastNameButton}
            >
              Show/Hide Lastname
            </button>
            <p className={ln}>{lName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
