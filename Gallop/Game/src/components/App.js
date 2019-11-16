import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import GameHeader from "./gameHeader";
import GameHeader1 from "./gameHeader1";
import InnerHome from "./innerHome";
import BookingGame from "./bookingGame";
import ScoreCard from "./scoreCard";
import CustomTable from "./customTable";
import Stats from "./stats";
import LeaderBoard from "./leaderBoard";
import FooterDemo from "./footerDemo";
import { Tab } from "react-bootstrap";
import MyMap from "./leaflet";
import NoLoginHeader from "./nologinheader";
import RegisterPlayer from "./registerplayer";
import LoginPlayer from "./loginplayer";
import apiKey from "./config";

import InnerSection from "./innerSection";
import BookingGame1 from "./bookingGame1";
import uuid from "uuid";
import { withCookies } from "react-cookie";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super();
    this.changePageContext = this.changePageContext.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.state = {
      isLoggedIn: true,
      page: "",
      sessionId: ""
    };
    console.log("In constructor");
  }

  componentDidMount() {
    var object = {};
    const { cookies } = this.props;
    console.log("App Mount");
    var session = cookies.get("sessionId");

    if (session !== undefined) {
      const options = {
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
          sessionId: session
        }
      };
      axios
        .get("http://localhost:8000/authenticate/", options)
        .then(res => {
          console.log("Response");
          this.authenticateUser(true);
          console.log(res.data);
          if (res.data.code === "OK") {
            const now = new Date();
            const secondsSinceEpoch = Math.round(now.getTime() / 1000);
            const cookieAge = res.data.expiryTime - secondsSinceEpoch;
            cookies.set("sessionId", res.data.sessionId, {
              path: "/",
              maxAge: cookieAge
            });
          } else {
            this.authenticateUser(true);
            this.changePageContext("login");
          }
        })
        .catch(function(error) {
          console.log("Error");
          this.authenticateUser(true);
          this.changePageContext("login");
          console.log(error);
        });
    } else {
      this.authenticateUser(true);
      this.changePageContext("login");
    }
  }

  changePageContext(pagename) {
    this.setState(prevState => {
      if (prevState.page != pagename) return { page: pagename };
    });
  }

  authenticateUser(isauthenticated) {
    this.setState(prevState => {
      if (prevState.isLoggedIn != isauthenticated)
        return { isLoggedIn: isauthenticated };
    });
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ display: this.state.isLoggedIn ? "block" : "none" }}>
          <GameHeader />
          <Route
            exact
            path="/innerHome"
            render={() => <InnerHome cookies={this.props.cookies} />}
          />
          <Route exact path="/bookingGame" component={BookingGame} />
          <Route exact path="/scoreCard" component={ScoreCard} />
          <Route exact path="#" component={CustomTable} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/leaflet" component={MyMap} />
          <Route
            exact
            path="/innerSection"
            render={() => <InnerSection cookies={this.props.cookies} />}
          />
          <Route exact path="/bookingGame1" component={BookingGame1} />
          <Route exact path="/leaderBoard" component={LeaderBoard} />
          <FooterDemo />
        </div>
        <div style={{ display: !this.state.isLoggedIn ? "block" : "none" }}>
          <NoLoginHeader />
          <div
            style={{ display: this.state.page === "login" ? "block" : "none" }}
          >
            <LoginPlayer
              currentpage={this.changePageContext}
              authenticate={this.authenticateUser}
              cookies={this.props.cookies}
            />
          </div>
          <div
            style={{
              display: this.state.page === "register" ? "block" : "none"
            }}
          >
            <RegisterPlayer currentpage={this.changePageContext} />
          </div>
          <FooterDemo />
        </div>
      </React.Fragment>
    );
  }
}

export default withCookies(App);
