import React, {Component} from "react";
import BlogPostField from "./blogPostComponents/BlogPostField";
import CharCounter from "./blogPostComponents/CharCounter";
import SubmitBtn from "./blogPostComponents/SubmitBtn";

class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {charCount: 0}
  }

  setChars(number)
  {
    this.setState({charCount: number});
  }

  validateForm()
  {
    if (this.state.charCount >= 100){
        alert("Blog post submitted!")
    } else {
        alert("Blog post must be at least 100 characters long!")
    }
  }

  renderCharCount(){
    return <CharCounter count={this.state.charCount}/>
  }

  render (){
    return(
        <div>
            <BlogPostField callback={(number) => this.setChars(number)}/>
            {this.renderCharCount()}
            <br></br>
            <SubmitBtn callback={() => this.validateForm()}/>
        </div>
    )
  }
}

export default BlogPost