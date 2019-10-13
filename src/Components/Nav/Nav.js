import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Redux/reducers/userReducer";
import "../../styles/Nav/Nav.scss";


class Nav extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <nav className="nav-div">
                <div className="top-div">
                    <img id="profile-pic" alt="profile_pic" src={this.props.profile_pic} />
                    <h1>{this.props.username}</h1>
                </div>
                <div className="middle-div">
                    <Link to="/dashboard"><button>Home</button></Link>
                    <Link to="/new"><button>Add Post</button></Link>
                </div>
                <div>
                    <Link to="/"><button onClick={this.props.logoutUser}>Logout</button></Link>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        logoutUser,
        username: reduxState.userReducer.username,
        profile_pic: reduxState.userReducer.profile_pic
    }
}

export default connect(mapStateToProps, { logoutUser })(Nav);