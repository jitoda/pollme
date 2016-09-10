const React = require('react');

const Signup = React.createClass({
	render() {
		return (
			<div>
				<p> Signup </p>
		
				<form>
          <div>
            <label> Username: </label>
            <input type='text' name='username' /> 
  				</div>

          <div>
            <label> Password: </label>
            <input type='text' name='password' /> 
          </div>

          <button type='submit'> Submit </button>

        </form>

      </div>
		)
	}
});

module.exports = Signup;