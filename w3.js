import React from 'react'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { favoritecolor: 'red' }
    this.changeColor = this.changeColor.bind(this)
  }
  // static getDerivedStateFromProps (props, state) {
  //   return { favoritecolor: props.favcol }
  // }
  shouldComponentUpdate (nextProps, nextState) {
    return true
  }
  changeColor () {
    this.setState({ favoritecolor: 'blue' })
  }
  render () {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button className type='button' onClick={this.changeColor}>
          Change color
        </button>
      </div>
    )
  }
}
