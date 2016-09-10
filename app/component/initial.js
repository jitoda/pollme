const React = require('react');

const Initial = React.createClass({
	render() {
		return (
			<div>
        <p> Login </p>
        <form>

          <div>
            <label> Username: </label>
            <input type='text' name='username' /> 
  				</div>

          <div>
            <label> Password: </label>
            <input type='text' name='password' /> 
          </div>
    
        </form>

          <div>
            <a href='/#/signup'> Sign-up </a>
          </div> 

			</div>
		)
	}
})

module.exports = Initial; 