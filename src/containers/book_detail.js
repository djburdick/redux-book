import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  render() {
    if (!this.props.activeBook) {
      return <div>select a book</div>;
    }
    return (
       <div>
         <div>Book Detail: {this.props.activeBook.title}</div>
         <div>Book Detail: {this.props.activeBook.pages}</div>
       </div>
      );
  }
}

function connectStateToProps(state) {
  return { activeBook: state.activeBook };
}

export default connect(connectStateToProps)(BookDetail);
