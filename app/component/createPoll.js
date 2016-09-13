const React = require('react');
import ReactDOM from 'react-dom'

// All of our logic is in this createPoll class right now
// had issues passing props from the poll.js container
const CreatePoll = React.createClass({
// hold the title and options as their added in the forms in real time
  getInitialState: function () {
    return {title: '', choices: []};
  },
// updates the title state  to the value of the input
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
    console.log(this.state.title);
  },
// creates the poll object that will be posted to the database
  postPoll: function(uid) {
    let postObj = {};
    postObj.poll_title = this.state.title;
    postObj.created_by = uid;
    
    let choiceObj = {};
    for (let i = 0; i < this.state.choices; i++) {
      let choiceProp = 'c' + i;
      let valueProp = 'v' + i;
      choiceObj[choiceProp] = this.state.choices[i];
      choiceObj[valueProp] = 0;
    }

    postObj.choice = choiceObj;

    $.ajax()
  },
//handles the submission of a poll
  handleSubmit: function(e) {
    e.preventDefault();
    let text = this.refs.choice.value.trim();
    let array = this.state.choices;
    array.push(text);
    this.setState({choices: array});
    console.log(this.state);
    this.refs.choice.value = '';
  },
// adds the choices to the DOM after each is inputed
  renderOptions: function() {
     return this.state.choices.map( (ele) => <li> {ele} </li> );
  },

  render: function() {
    return (
      <div>
        <div>

          <h2>Create a poll</h2>
          <form className="user-input" >
            <input 
              type="text" 
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </form>
        </div>

        <div className='choices'>
          <form className="user-input" onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="Add options"
              ref='choice'
            />
            <input type='submit' />
          </form>

          <ul id="options-table">
            {this.renderOptions()}
          </ul>

        </div>

        <button type="button" className="btn btn-success" onSubmit={this.postPoll}>
					<span> Create Poll</span>
				</button>
      </div>
    )
  }
});

module.exports = CreatePoll; 