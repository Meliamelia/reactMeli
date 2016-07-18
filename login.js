//form login
var LoginForm = React.createClass({
  render: function() {
    return (
      <div className="LoginForm">
	  <center><h1>Log In</h1>
	  <form method="post" action="">
	  <table>
		<tr>
			<td>Email</td>
			<td></td>
			<td><input type="email"/></td>
		</tr>
		<tr>
			<td>Password</td>
			<td></td>
			<td><input type="password"/></td>
		</tr>
		<tr>
			<td colspan="3"></td>
			<td></td>
			<td><input type="submit" value="Login"/><input type="reset" value="Cancel"/></td>
		</tr>
	  </table>
	  </form>
	  <br/>
	  do not have an account?, <a href="register.html">Register !</a>
	  </center>
      </div>
    );
  }
});
ReactDOM.render(
  React.createElement(LoginForm, null),
  document.getElementById('LoginForm')
);

