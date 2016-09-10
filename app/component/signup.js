const React = require('react');

const Signup = React.createClass({
	render() {
		return (
			<div>
				<p> Signup </p>
		

        <form method="POST" action='http://localhost:4000/signup'>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <input type='submit' value="Sign Up" />
        </form>

      </div>
		)
	}
});

module.exports = Signup;