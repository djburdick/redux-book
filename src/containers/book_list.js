import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
          <li 
            onClick={() => this.props.selectBook(book)}
            key={book.title} 
            className="list-group-item">{book.title}
          </li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    );
  }

}

function mapStateToProps2(state) {
  // whatever is returned will show up as props
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // when selectBook is called the result should be passed to all reducers
  // anything returned from this function will end up as on the BookList container
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// read react-redux docs about connect
//
export default connect(mapStateToProps2, mapDispatchToProps)(BookList);
