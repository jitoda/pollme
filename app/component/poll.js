const React = require('react');
const createPoll = require('./createPoll');


const Poll = React.createClass({
  // getInitialState: function () {
  //   return {title: '', choices: [], userId: 0, test: "hi"};
  // },
  
  // handleTitleChange: function(e) {
  //   this.setState({title: e.target.value});
  //   console.log(this.state.title);
  // },

  // postPoll: function() {
  //   let postObj = {};
  //   postObj.poll_title = this.state.title;
  //   postObj.created_by = this.state.userId;
    
  //   let choiceObj = {};
  //   for (let i = 0; i < this.state.choices; i++) {
  //     let choiceProp = 'c' + i;
  //     let valueProp = 'v' + i;
  //     choiceObj[choiceProp] = this.state.choices[i];
  //     choiceObj[valueProp] = 0;
  //   }
  //   postObj.choice = choiceObj;
  //   $.ajax()
  // },

  // handleSubmit: function(e) {
  //   e.preventDefault();
  //   let text = this.refs.choice.value.trim();
  //   let array = this.state.choices;
  //   array.push(text);
  //   this.setState({choices: array, userId: cookie.load('ssid')});
  //   //console.log("this.state in handlesubmit", this.state);
  //   this.refs.choice.value = '';
  // },
  //  renderOptions: function() {
  //    return this.state.choices.map( (ele) => <li> {ele} </li> );
  // },

  render() {
    // const childrenWithProps = React.Children.map(this.props.children,
    //  (child) => React.cloneElement(child, {
    //    renderOptions: this.renderOptions,
    //    handleSubmit: this.handleSubmit,
    //    postPoll: this.postPoll,
    //    handleTitleChange: this.handleTitleChange,
    //    getInitialState: this.getInitialState
    //  })
    return (
          this.props.children
    )
  }
})

module.exports = Poll; 