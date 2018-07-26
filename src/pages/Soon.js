import React, { Component } from 'react';
import PeopleList from '../components/PeopleList';
import { connect } from 'react-redux';
import { getSoonList, clearList } from '../redux/actions/birthdaysActions';
import { toggleActiveLink } from '../redux/actions/UIAction';

class Soon extends Component {
  componentWillMount() {
    this.props.toggleActiveLink('soon');
  }

  componentDidMount() {
    this.props.getSoonList();
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
  }), { getSoonList, clearList, toggleActiveLink }
)(Soon);
