import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPosts, getPostByUsername, deletePost } from "../../Redux/reducers/postReducer";
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

    componentDidUpdate(prevProps) {
        if(prevProps.posts !== this.props.posts) {
            this.props.getAllPosts();
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSearch = () => {
        const {searchBox} = this.state;

        this.props.getPostByUsername(searchBox);
    }

    clearSearchInput = () => {
        this.setState({searchBox: ""})
    }

    deletePost = (post_id) => {
        this.props.deletePost(post_id);
    }

    render() {
        const postMapped = this.props.posts.map((post, i) => {
            return (
                <div className="post-background" key={i}>
                    <Link to={`/post/${post.post_id}`} style={{textDecoration: "none"}}>
                        <div key={i} className="post-info" onClick={this.seePost}>
                            <div className="dashboard-post-title">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="dashboard-user-info">
                                <h1>by {post.username}</h1>
                                <img alt="pic" src={post.profile_pic} />
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })

        return (
            <div className="mapped-posts">
                <div className="search-box">
                    <input
                        type="text"
                        name="searchBox"
                        value={this.state.searchBox}
                        onChange={this.handleInputChange} />
                    <button onClick={this.handleSearch}>Search</button>
                    <button onClick={this.clearSearchInput}>Clear</button>
                    <button onClick={() => this.props.getAllPosts()}>Get All Posts</button>
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

export default connect(mapStateToProps, { getAllPosts, getPostByUsername, deletePost })(Dashboard);