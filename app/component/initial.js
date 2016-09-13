const React = require('react');

const Initial = React.createClass({
  // login: function () {
  //   console.log('my ref:', this.refs.username.value);
  //   $.ajax({
  //     type: 'POST',
  //     url: 'http://localhost:4000/',
  //     crossDomain: true,
  //     data: { username: this.refs.username.value, password: this.refs.password.value }
  //   })
  // },
	render: function () {
		return (
      <div>
        <h1> Poll Me </h1>  
        <h4> Login </h4>
        <div className='login'>
          <form method="POST" action='http://localhost:4000/login'>
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

          <div className="signup-link">
            <a href='/#/signup'> Sign-up </a>
          </div> 

			</div>
		)
	}
})

//  <form>

//           <div>
//             <label> Username: </label>
//             <input type='text' name='username' ref='username'/> 
//   				</div>

//           <div>
//             <label> Password: </label>
//             <input type='password' name='password' ref='password'/> 
//           </div>
          
//             <button onClick = { this.login }> Login </button>
//         </form>

module.exports = Initial; 