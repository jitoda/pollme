const React = require('react');

const Poll = React.createClass({
 render() {
   return <h3>Poll {this.props.params.id}</h3>
 }
})

module.exports = Poll; 