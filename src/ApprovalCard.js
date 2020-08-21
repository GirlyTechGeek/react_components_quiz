import React, {Component} from "react";

// Convert to class based component

// const ApprovalCard = (props) => {
//   return (
//     <div className="ui card">
//       <div className="content">{props.children}</div>
//       <div className="extra content">
//         <div className="ui two buttons">
//           <div className="ui basic green button">Approve</div>
//           <div className="ui basic red button">Reject</div>
//         </div>
//       </div>
//     </div>
//   );
// };





class ApprovalCard extends React.Component{
  render(){
    const {props} = this.props;
    return (
       <div>
         <p className="ui card" />
         <p className="content">{this.children}</p>
         <p className="extra content" />
         <p className="ui two buttons" />
         <p className="ui basic green button">Approve</p>
         <p className="ui basic red button">Reject</p>
      </div>
    );
  }
}

export default ApprovalCard;
