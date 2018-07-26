import React, { Component } from 'react';
import PeopleList from '../components/PeopleList';
import { connect } from 'react-redux';
import { getTodayList, clearList } from '../redux/actions/birthdaysActions';
import { toggleActiveLink } from '../redux/actions/UIAction';

class Today extends Component {
  componentWillMount() {
    this.props.toggleActiveLink('today');
  }

  componentDidMount() {
    this.props.getTodayList();
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
  }), { getTodayList, clearList, toggleActiveLink }
)(Today);
