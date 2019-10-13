import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../Redux/reducers/postReducer";
import "../../styles/Dashboard/Dashboard.scss";


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchBox: ""
        }
    }

    componentDidMount() {
        this.props.getAllPosts();
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSearch = () => {

    }

    seePost = () => {
        
    }

    render() {
        const postMapped = this.props.posts.map((post, i) => {
            return (
                <div key={i} className="post-info" onClick={this.seePost}>
                    <div className="dashboard-post-title">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="dashboard-user-info">
                        <h1>by {post.username}</h1>
                        <img alt="pic" src={post.profile_pic} />
                    </div>
                </div>
            )
        })

        return (
            <div className="mapped-posts">
                <div className="search-box">
                    <input
                        type="text"
                        name="searchBox"
                        onChange={this.handleInputChange} />
                    <button onClick={this.handleSearch}>Search</button>
                </div>
                <br />
                {postMapped}
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        posts: reduxState.postReducer.posts
    }
}

export default connect(mapStateToProps, { getAllPosts })(Dashboard);