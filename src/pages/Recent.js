import React, { Component } from 'react';
import PeopleList from '../components/PeopleList';
import { connect } from 'react-redux';
import { getRecentList, clearList } from '../redux/actions/birthdaysActions';
import { toggleActiveLink } from '../redux/actions/UIAction';

class Recent extends Component {
  componentWillMount() {
    this.props.toggleActiveLink('recent');
  }

  componentDidMount() {
    this.props.getRecentList();
  }

  componentWillUnmount() {
    this.props.clearList();
  }

  render() {
    const { usersList } = this.props;

    return (
      <PeopleList list={usersList} />
    );
  }

}

export default connect(
  state => ({
    usersList: state.birthdays.usersCurrentList
  }), { getRecentList, clearList, toggleActiveLink }
)(Recent);
