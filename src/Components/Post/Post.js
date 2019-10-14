import React, { Component } from "react";
import "../../styles/Post/Post.scss";
import { deletePost } from "../../Redux/reducers/postReducer"
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Post extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="match-params">
                <h1>{this.props.match.params.post_id}</h1>
                <button onClick={() => this.props.deletePost(this.props.match.params.post_id)}>
                    <Link to="/dashboard" style={{textDecoration: "none"}}>
                        <span>&#128465;</span>
                    </Link>
                </button>
            </div>
        );
    }
}

export default connect(null, { deletePost })(Post)