import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="form">
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="forminput"
          />

          <br /><br />

          <input
            type="password"
            name="password"
            placeholder="password"
            className="forminput"
          />
          <br /><br />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
