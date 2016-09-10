const React = require('react');


const CreatePoll = React.createClass({
  render() {
    return (
      <div>
        <div>
          <h2>Create a poll</h2>
          <form className="user-input" onSubmit={ this.setPollTitle.bind(this) } >
            <input id="title-input" type="text" ref="titleInput" placeholder="Add a title to your poll"/>
          </form>
        </div>
        <div className='choices'>
          <form className="user-input" id="new-option" onSubmit={ this.addOption.bind(this) } >
						<input
							type="text"
							ref="textInput"
							placeholder="Type to add a new option"
						/>
					</form>
					{ this.renderErrors() }

        // TODO::  
        // dynamically add the inputed choices from above
				<ul id="options-table">
					{ this.renderOptions() }
				</ul>

				
        </div>
        <button type="button" className="btn btn-success" onClick={ this.submitPoll.bind(this) }>
					// <span className="glyphicon glyphicon-ok"></span>
					<span> Submit</span>
				</button>
      </div>
    )
  }
})

module.exports = CreatePoll; 
