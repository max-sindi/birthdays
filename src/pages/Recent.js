import React, { Component } from 'react';
import People from '../components/People';

class Recent extends Component {

  render() {
    return (
      <People page="recent" whichList='getRecentList'/>
    );
  }

}

export default Recent;
