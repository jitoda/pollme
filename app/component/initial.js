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
        <p> Login </p>

        <form method="POST" action='http://localhost:4000/login'>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <input type='submit' value="login" />
        </form>

          <div>
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