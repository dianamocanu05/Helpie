import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import Logo from "./Logo"
import { Redirect } from 'react-router-dom'
import "./styles/Login.css"
import { red } from "@material-ui/core/colors";


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
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
      redirect: false,
      showError: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    //CHANGE LATER - ONLY FOR TESTING
    // var data = 'loggedin';
    // localStorage.setItem('token', data);
    var url = 'https://users-bd.herokuapp.com/api/users/login';
    var request = new Request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    });
    const response = await fetch(request);
    const data = await response.json();
    if (data.success === 1) {
      //succes
      localStorage.setItem('token', data.token);
      localStorage.setItem('user',data.username)
      this.props.LogIn(1);
      this.setRedirect();
    } else {
      //popup failed
      alert("User not found!");
    }
   
  }


  render() {
  
    return (

      <div className="bodyLogin">

        <div>

          <div className="center">
            <form className="signup-containerLogin form-controlLogin" >
              <div className="center">
                <img src={require('./styles/LogoH-02.png').default} id="imageLogin" />
              </div>
              <div className="center textLogin">
                <label>
                  <p id="textLogin">Email</p>
                  <input className="form__fieldLogin"
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

                  <p id="textLogin">Password</p>
                  <input className="form__fieldLogin"
                    type="password"
                    name="password"
                    placeholder="Please enter your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </label> </div>

              <div className="center">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1" id="textLogin">Remember me</label>
                </div>
              </div>


              <div className="center">
                {this.renderRedirect()}
                <Button onClick={this.handleSubmit} type="button" variant="contained" color="primary" disableElevation>
                Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
