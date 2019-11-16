import React, {Component} from "react"
import '../styles/registerUser.css';
import axios from "axios"

class LoginPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      // console.log(event.target)
      // console.log(formData)
      const { cookies } = this.props;
      var object = {};
      formData.forEach(function(value, key){
          object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json)
      const options = {
        headers: {
                    'X-Api-Key': 'c%yti%phgv$^#qr8v#vc+t%gkamq9868*lw#*$u@t#e=8mr_t5',
                    'Content-Type': 'application/json'
                  }
      };
      axios
          .post(
            'http://localhost:8000/login/',
            json,
            options
        )
          .then(res => {
            console.log("Response")
            if (res.data.code === "OK") {
              this.props.currentpage('login')
              this.props.authenticate(true)
              console.log(res.data.sessionId)
              console.log(res.data.expiryTime)
              const now = new Date()
              const secondsSinceEpoch = Math.round(now.getTime() / 1000)
              const cookieAge = res.data.expiryTime - secondsSinceEpoch
              cookies.set('sessionId',
                          res.data.sessionId,
                          {
                            path: '/',
                            maxAge: cookieAge
                          });
            } else {
              alert(res.data.message)
            }
          })
          .catch(function (error) {
            console.log("Error")
            console.log(error);
          });
    }

    render() {
      return (
        <div className="formcontainer" align="center">
            <div className="logo">Login</div>
            <div className="register-item">
              <form className="form form-register" onSubmit={this.handleSubmit}>
                <div className="form-field">
                      <input
                        name="userId"
                        id="login-username"
                        type="text"
                        className="form-input"
                        placeholder="User Id/Email/Phone"
                        value={this.state.userId}
                        onChange={this.handleChange} />
                </div>
                <div className="form-field">
                      <input
                        name="password"
                        id="login-password"
                        type="password"
                        className="form-input"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </div>

                <div className="form-field">
                  <input type="submit" value="Login"/>
                </div>
                <div className="form-field">
                  <a onClick={() => this.props.currentpage('register')} style={{cursor:'pointer'}}>New User</a>
                </div>

              </form>
            </div>
        </div>
      )
    }
}

export default LoginPlayer
