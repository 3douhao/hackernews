import React, { Component } from 'react'
import axios from 'axios'

class JJ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      title: null
    }
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res =>
        this.setState({
          id: res.data.id,
          title: res.data.title
        })
      )
  }

  render() {
    return (
      <div className='bg-blue-600'>
        {this.state.id} - {this.state.title}
      </div>
    )
  }
}

export default JJ
