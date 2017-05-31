import React, {Component} from 'react'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.id) {
      this.setState({
        locked: false
      });
    }
  }

  render() {
    if(this.state.locked) {
      return (
        <div id="details">
          <h1>Locked</h1>
        </div>
      )
    } else {
      return (
        <div id="locked-details">
          <h1>Detail: {this.props.id + 1}</h1>
        </div>
      )
    }
  }
}
