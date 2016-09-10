const React = require('react');

const Initial = React.createClass({
  login: function () {
    console.log('my ref:', this.refs.username.value);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:4000/',
      data: 
    })
  },
	render: function () {
		return (
			<div>
        <p> Login </p>
        <form>

          <div>
            <label> Username: </label>
            <input type='text' name='username' ref='username'/> 
  				</div>

          <div>
            <label> Password: </label>
            <input type='password' name='password' /> 
          </div>
          
            <button onClick = { this.login }> Login </button>
        </form>

          <div>
            <a href='/#/signup'> Sign-up </a>
          </div> 

			</div>
		)
	}
})

module.exports = Initial; 