//main page
var mainPage = React.createClass({
  render: function() {
    return (
      <div className="mainPage">
	  <center>
	  <h1>Welcome in MainPage</h1><br/>
	  <a href='register.html'> Register</a> | <a href='login.html'>Login</a>
	  </center>
      </div>
    );
  }
});
ReactDOM.render(
  React.createElement(mainPage, null),
  document.getElementById('mainPage')
);

