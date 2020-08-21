import React, {Component} from "react";

// convert to class-based component
// const CommentDetail = (props) => {
//   return (
//     <div className="comment">
//       <a href="/" className="avatar">
//         <img alt="avatar" src={props.img} />
//       </a>
//       <div className="content">
//         <a href="/" className="author">
//           {props.author}
//         </a>
//         <div className="metadata">
//           <span className="date">{props.timeAgo}</span>
//         </div>
//         <div className="text">{props.commentText}</div>
//       </div>
//     </div>
//   );
// };



class CommentDetail extends Component{


  render(){
    const{props} = this.props;

    return(
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={this.props.img} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {this.props.author}
      </a>
      <div className="metadata">
        <span className="date">{this.props.timeAgo}</span>
      </div>
      <div className="text">{this.props.commentText}</div>
    </div>
  </div>)
  }
}

export default CommentDetail;