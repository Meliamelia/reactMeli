//form register
var registerForm = React.createClass({
  render: function() {
    return (
      <div className="registerForm">
	  <center><h4>Form Register</h4>
	  <form method="post" action="">
	  <table>
		<tr>
			<td>Name</td>
			<td></td>
			<td><input type="text"/></td>
		</tr>
		<tr>
			<td>Email</td>
			<td></td>
			<td><input type="email"/></td>
		</tr>
		<tr>
			<td>Address</td>
			<td></td>
			<td><textarea/></td>
		</tr>
		<tr>
			<td>Password</td>
			<td></td>
			<td><input type="password"/></td>
		</tr>
		<tr>
			<td colspan="3"></td>
			<td></td>
			<td><input type="submit" value="Register"/><input type="reset" value="Cancel"/></td>
		</tr>
	  </table>
	  </form>
	  <h5><a href="index.html">Back to MainPage</a></h5>
	  </center>
      </div>
    );
  }
});
ReactDOM.render(
  React.createElement(registerForm, null),
  document.getElementById('registerForm')
);

