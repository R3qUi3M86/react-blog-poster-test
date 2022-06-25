import React, {Component} from "react";
import './BlogPostField.css';

class BlogPostField extends Component { 
    constructor (props) {
        super(props)
    }

    countChars(evt){
        this.props.callback(evt.currentTarget.value.length);
    }

    render (){
        return (
            <textarea className="inputText" rows="20" cols="100" onChange={(e) => this.countChars(e)}></textarea>
        )
    }
    
}

export default BlogPostField;