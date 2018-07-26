import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchMore } from '../redux/actions/birthdaysActions';


class WatchMore extends Component {
  watchMore = () => {
    this.props.watchMore();
  }

  render() {
    const { usersCurrentList } = this.props;

    return (
      <div onClick={this.watchMore} className="watch-more">
        { usersCurrentList && usersCurrentList.length > 0 && 'Показать еще >'}
      </div>
    );
  }

}

export default connect(
  state => ({
    usersCurrentList: state.birthdays.usersCurrentList
  }), { watchMore }
)(WatchMore);
