import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addPost } from "../../Redux/reducers/postReducer";
import "../../styles/Form/Form.scss"


class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            img: "",
            content: ""
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlePost = () => {
        const { title, img, content } = this.state;
        console.log(title, img, content)
        const { user_id } = this.props;
        console.log(user_id)

        const newPost = { title, img, content, user_id };

        this.props.addPost(newPost);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="Form-form-container">
                <form className="Form-form-box">
                    <div className="Form-input-box">
                        <div className="Form-new-post">
                            <h1>New Post</h1>
                        </div>
                        <div className="Form-title-input">
                            <label>Title:</label>
                            <input
                                type="text"
                                name="title"
                                onChange={this.handleInputChange} />
                        </div>
                        <div alt="no img" style={{ backgroundImage: `url(${this.state.img})` }} className="Form-img-box"></div>
                        <div className="Form-img-input">
                            <label>Image URL:</label>
                            <input
                                type="text"
                                name="img"
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="Form-content-input">
                            <label>Content:</label>
                            <textarea
                                rows="10"
                                cols="180"
                                type="text"
                                name="content"
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="Form-form-button">
                            <button onClick={this.handlePost}>Post</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        img: reduxState.postReducer.img
    }
}

export default connect(mapStateToProps, { addPost })(Form);