import React, { Component } from 'react';
import People from '../components/People';

class Today extends Component {

  render() {
    return (
      <People page="today" whichList='getTodayList'/>
    );
  }

}

export default Today;
