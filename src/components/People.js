import React, { Component } from 'react';
import PeopleList from '../partials/PeopleList';
import { connect } from 'react-redux';
import functionsList from '../redux/actions/birthdaysActions';
import { toggleActiveLink } from '../redux/actions/UIAction';

class People extends Component {
  componentWillMount() {
    this.props.toggleActiveLink(this.props.page);
  }

  componentDidMount() {
    const { whichList } = this.props;
    // get func which need to call for getting list
    const funcToGetList = this.props[whichList];

    funcToGetList();
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
  }), { ...functionsList, toggleActiveLink }
)(People);
