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
        marginLeft: 67,
      },
      formeReg: {
        paddingLeft: 60,
        color: "#E84A5F",
      },
    };
class RegisterView extends Component {
    
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <h2 style={style.formeReg}>Форма регистрации</h2>
            <form autoComplete="on"
                style={style.form}
                onSubmit={this.handleSubmit}>
          <label style={style.label}>
            Имя :
            <input
              type="text"
                        name="name"
                        value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
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
            Зарегистрироваться
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
    onRegister:authOperations.register,
}

export default connect(null, mapDispatchToProps )(RegisterView);

