const React = require('react');

const Poll = React.createClass({
  render() {
    return (
      <div>
        <h3>Poll {this.props.params.quest}</h3>
        <div className='choices'>
          <ul>
            <li><a href='#'>{this.props.params.choice}</a></li>
          </ul>
        </div>
      </div>
    )
    
  }
})

module.exports = Poll; 