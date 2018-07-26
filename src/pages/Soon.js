import React, { Component } from 'react';
import People from '../components/People';

class Soon extends Component {

  render() {
    return (
      <People page="soon" whichList='getSoonList'/>
    );
  }

}

export default Soon;
