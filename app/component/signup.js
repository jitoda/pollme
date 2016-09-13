const React = require('react');

const Signup = React.createClass({
	render() {
		return (
      <div>
        <h1> Poll Me </h1>    
				<h4> Signup </h4>
		
        <div className='login'>
          <form method="POST" action='http://localhost:4000/signup'>
            <div className="row">
              <div className="input-field col s12">
                <input name="username" type="text" />
                <label for="username">Username</label>
              </div>
              <div className="input-field col s12"> 
                <input name="password" type="password" />
                <label for="password">Passwor</label>
              </div>
              <input type='submit' value="login" className="waves-effect waves-light btn" />
            </div>
          </form>
        </div>
      </div>
		)
	}
});

module.exports = Signup;