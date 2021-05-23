import React, { Component } from "react";
import { connect } from "react-redux";
import {authOperations} from '../auth'


const style = {
      form: {
        width: 300,
        paddingLeft: 20,
      },
      label: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 10,
      },
      button: {
        border: " black",
        borderRadius: 10,
        padding: 10,
        marginLeft: 113,
      },
      formeReg: {
        paddingLeft: 128,
        color: "#E84A5F",
      },
    };
class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h2 style={style.formeReg}>Логин</h2>
        <form
          onSubmit={this.handleSubmit}
          style={style.form}
          autoComplete="on"
        >
          <label style={style.label}>
            Почта :
            <input
              type="email"
              name="email"
                value={email}
                onChange={this.handleChange}
            />
          </label>
          <br />
          <label style={style.label}>
            Пароль :
            <input
              type="password"
              name="password"
               value={password}
               onChange={this.handleChange}
            />
          </label>
          <br />
          <button style={style.button} type="submit">
            Войти
          </button>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn
}

export default connect(null,mapDispatchToProps)(LoginView);
