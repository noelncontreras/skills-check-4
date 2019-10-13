import React, {Component} from "react";
import "../../styles/Post/Post.scss";


export default class Post extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    
    render() {
        return (
            <div className="match-params">
                <h1>{this.props.match.params.post_id}</h1>
            </div>
        );
    }
}