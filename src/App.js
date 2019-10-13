import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Auth from "./Components/Auth/Auth";
import routes from './routes';
import { connect } from "react-redux";
import { getSession } from "./Redux/reducers/userReducer";

import './App.scss';


class App extends Component {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div>
        {!this.props.user_id ?
          <Auth />
          :
          <div className="nav-container">
            <Nav />
            {routes}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.userReducer.user_id
  }
}

export default connect(mapStateToProps, { getSession })(App);