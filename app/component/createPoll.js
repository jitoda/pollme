const React = require('react');
import cookie from 'react-cookie';
import ReactDOM from 'react-dom'

const CreatePoll = React.createClass({
  getInitialState: function () {
    return {title: '', choices: [], userId: 0};
  },
  
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
    console.log(this.state.title);
  },

  postPoll: function() {
    let postObj = {};
    postObj.poll_title = this.state.title;
    postObj.created_by = this.state.userId;
    
    let choiceObj = {};
    for (let i = 0; i < this.state.choices; i++) {
      let choiceProp = 'c' + i;
      let valueProp = 'v' + i;
      choiceObj[choiceProp] = this.state.choices[i];
      choiceObj[valueProp] = 0;
    }
    postObj.choice = choiceObj;
    console.log("postObj", postObj);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:4000/create',
      data: postObj
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    let text = this.refs.choice.value.trim();
    let array = this.state.choices;
    array.push(text);
    this.setState({choices: array, userId: cookie.load('ssid')});
    console.log("this.state in handlesubmit", this.state);
    this.refs.choice.value = '';
  },
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

          </form>
           <ul id="options-table">
            {this.renderOptions()}
           </ul>

        </div>

        
        <button type="button" className="btn btn-success" onClick={this.postPoll}>
					<span> Create Poll</span>
				</button>
      </div>


    )
  }
});

module.exports = CreatePoll; 