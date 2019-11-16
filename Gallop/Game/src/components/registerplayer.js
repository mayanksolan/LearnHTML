import React, {Component} from "react"
import '../styles/registerUser.css';
import Datetime from 'react-datetime';
import '../styles/react-datetime.css';

import axios from "axios"

class RegisterPlayer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            userId: "",
            email: "",
            phone: "",
            password: "",
            gender: "",
            dateofbirth: "",
            city: "",
            state: "",
            country: "",
            battingarm: "",
            bowlingarm: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDateChangeEvent = this.handleDateChangeEvent.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleDateChangeEvent = date => {
      this.setState({
        dateofbirth: date
      });
    };

    handleChange(event) {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleRegister(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log(formData)
      var object = {};
      formData.forEach(function(value, key){
          object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);
      const options = {
        headers: {
                    'X-Api-Key': 'c%yti%phgv$^#qr8v#vc+t%gkamq9868*lw#*$u@t#e=8mr_t5',
                    'Content-Type': 'application/json'
                  }
      };
      axios
          .post(
            'http://localhost:8000/players/',
            json,
            options
        )
          .then(res => {
            console.log("Response")
            console.log(res)
            this.props.currentpage('login')
          })
          .catch(function (error) {
            console.log("Error")
            console.log(error);
          });
    }

    render() {
      return (
        <div className="formcontainer" align="center">
            <div className="logo">Player Signup</div>
            <div className="register-item">
              <form className="form form-register" onSubmit={this.handleRegister}>
                <div className="form-field">
                      <input
                        name="name"
                        id="register-username"
                        type="text"
                        className="form-input"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </div>
                <div className="form-field">
                      <input
                        name="userId"
                        id="register-userid"
                        type="text"
                        className="form-input"
                        placeholder="User Id"
                        value={this.state.userId}
                        onChange={this.handleChange} />
                </div>
                <div className="form-field">
                      <input
                        name="email"
                        id="register-email"
                        type="email"
                        className="form-input"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </div>
                <div className="form-field">
                      <input
                        name="phone"
                        id="register-phone"
                        type="tel"
                        className="form-input"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-field">
                      <input
                        name="password"
                        id="register-password"
                        type="password"
                        className="form-input"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </div>

                <div className="form-field">
                      <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="form-input"
                          checked={this.state.gender === "male"}
                          onChange={this.handleChange} /> Male
                      <input
                          type="radio"
                          name="gender"
                          value="female"
                          className="form-input"
                          checked={this.state.gender === "female"}
                          onChange={this.handleChange} /> Female
                </div>

                <div className="form-field">
                      <Datetime
                        dateFormat="YYYY-MM-DD"
                        inputProps={{ id: 'register-dateofbirth',
                                      name: 'dateofbirth',
                                      style: {
                                        "width":"100%"
                                      },
                                      placeholder: "Date of birth"}}
                        className="form-input"
                        onChange={this.handleDateChangeEvent}
                        value={this.state.dateofbirth}
                        timeFormat={false} />
                </div>

                <div className="form-field">
                      <input
                        name="city"
                        id="register-city"
                        type="text"
                        className="form-input"
                        placeholder="City"
                        value={this.state.city}
                        onChange={this.handleChange} />
                </div>

                <div className="form-field">
                      <input
                        name="state"
                        id="register-state"
                        type="text"
                        className="form-input"
                        placeholder="State"
                        value={this.state.state}
                        onChange={this.handleChange} />
                </div>

                <div className="form-field">
                      <input
                        name="country"
                        id="register-country"
                        type="text"
                        className="form-input"
                        placeholder="Country"
                        value={this.state.country}
                        onChange={this.handleChange} />
                </div>

                <div className="form-field">
                <select
                    value={this.state.battingarm}
                    onChange={this.handleChange}
                    name="battingarm"
                    className="form-input"
                >
                    <option value="">Batting Arm</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
                </div>

                <div className="form-field">
                <select
                    value={this.state.bowlingarm}
                    onChange={this.handleChange}
                    name="bowlingarm"
                    className="form-input"
                >
                    <option value="">Bowling Arm</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
                </div>
                <div className="form-field">
                  <input type="submit" value="Register"/>
                </div>
              </form>
              <div className="form-field">
              Already registered?&nbsp;
                <a onClick={() => this.props.currentpage('login')} style={{cursor:'pointer'}}>Login</a>
              </div>
            </div>
        </div>
      )
    }
}

export default RegisterPlayer
