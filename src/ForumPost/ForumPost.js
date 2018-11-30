import React, { Component } from "react";
import axios from "axios";


class ForumPost extends Component {

// componentDidMount() {
//     axios.get(
//         process.env.REACT_APP_API_ENDPOINT + forum_posts
//     )
    
// }

render (){
    return (
        <div>
            <form>
                Title: <input type="text"/>
                Content: <input type="text"/>
                <input type="submit" value="submit"/>
            </form>
        </div>)
    };
}
export default ForumPost;