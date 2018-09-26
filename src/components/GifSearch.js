import React, { Component } from 'react'

export default class GifList extends Component {
  state = {
    query: ''
  }

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
        <label>Enter a Search Term:</label><br/>
        <input type='text' id='query' value={this.state.query} onChange={event => this.handleQueryChange(event)} /><br/>
        <button type='submit'>Find Gifs</button>
      </form>
    )
  }
}