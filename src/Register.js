import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Logo from "./Logo"
import "./styles/Register.css"

const Wrapper = styled.div`
    @media only screen and (max-width : 399px) {
        width: 10%
    }
`
const BtnGoogle = styled.button`
    margin:5px;
    width: 165px;
    height:35px;
    border-radius: 4px;
    background: #db3236;
    color:white;
    border:0px transparent;
    text-align: center;
    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      name: "",
      surname: "",
      address: "",
      password: "",
      passwordConfirm: "",
      success: false,
      error:false,
      errorMessage: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      success: false
    });
    this.setState({
      error: false
    });
    var url = 'https://users-bd.herokuapp.com/api/users/register';
    var request = new Request(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: this.state.name,
            surname: this.state.surname,
            userName: this.state.username,
            email: this.state.email,
            password1: this.state.password,
            password2: this.state.passwordConfirm,
            address: this.state.address
      })
    });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    if(data.success == 1){
      this.setState({
        success: true
      });
    }
    else if(data.message != "Database connection errror"){
      this.setState({
        error: true
      });
      this.setState({
        errorMessage: data.message
      });
    }
    else{
      this.setState({
        error: true
      });
      this.setState({
        errorMessage: "Data already exists or input is incorrect"
      });
    }
  }

  render() {
    return (
      <div className="bodyRegister">
    
        <div className="center">
          <form className="form-controlRegister signup-containerRegister">
          <div className="center">
          <div className="center" >
            <img src={require('./styles/LogoH-02.png').default} id="imageRegister" />
          </div>
        </div>
            <div className="center">
              <label>
                <p className="textRegister">Email address</p>
                <input className="form__fieldRegister"
                  type="email"
                  name="email"
                  placeholder="Please enter your email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="center">
              <label>
                <p className="textRegister">Username</p>
                <input className="form__fieldRegister"
                  type="text"
                  name="username"
                  placeholder="Please enter your  username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="center">
              <label>
                <p className="textRegister">Name</p>
                <input className="form__fieldRegister"
                  type="text"
                  name="name"
                  placeholder="Please enter your name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="center">
              <label>
                <p className="textRegister">Surname</p>
                <input className="form__fieldRegister"
                  type="text"
                  name="surname"
                  placeholder="Please enter your surname"
                  value={this.state.surname}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="center">
              <label>
                <p className="textRegister">Address</p>
                <input className="form__fieldRegister"
                  type="address"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="center">
              <label>
                <p className="textRegister">Password</p>
                <input className="form__fieldRegister"
                  type="password"
                  name="password"
                  placeholder="Please enter your password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="center">
              <label>
                <p className="textRegister">Confirm password</p>
                <input className="form__fieldRegister"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  value={this.state.passwordConfirm}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>

            <div className="center">
              <Button onClick={this.handleSubmit} type="button" variant="contained" color="primary" disableElevation>
                Register
              </Button>
            </div>
            {this.state.success ? <h2 className="center" style={{color: "green"}}>Account created</h2> : null}
        {this.state.error ? <h2 className="center" style={{color: "red"}}>{this.state.errorMessage}</h2> : null}
          </form>
        </div>
      </div>
    );
  }
}
