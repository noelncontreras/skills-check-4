import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSession, registerUser, loginUser } from "../../Redux/reducers/userReducer";
import "../../styles/Auth/Auth.scss"


class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: "noelnc",
            password: "0000"
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRegister = () => {
        const { username, password } = this.state;

        const newUser = { username, password };

        this.props.registerUser(newUser);
        this.props.getSession();
    }

    handleLogin = () => {
        const { username, password } = this.state;

        const user = { username, password };

        this.props.loginUser(user);
        this.props.getSession();
    }


    render() {
        const {username, password} = this.state;
        if (this.props.user_id) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="auth-page">
                <div className="login-box">
                    <div className="logo-helo">
                        <img alt="helo logo" src="https://github.com/DevMountain/simulation-3/blob/master/assets/helo_logo.png?raw=true" />
                        <h1>Helo</h1>
                    </div>
                    <br />
                    <div>
                        <form className="input-fields">
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username" 
                                onChange={this.handleChange}
                                required />
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                required />
                        </form>
                        <div>
                            <button onClick={() => this.handleLogin(username, password)}>Login</button>
                            <button onClick={() => this.handleRegister(username, password)}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        username: reduxState.userReducer.username
    }
}

export default connect(mapStateToProps, { getSession, registerUser, loginUser })(Auth);