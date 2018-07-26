import React, { Component } from 'react';
import Person from './Person';
import Loader from './Loader';
import WatchMore from '../components/WatchMore';

class PeopleList extends Component {

  render() {
    const { list } = this.props;

    let List;

    if(!list) {
      List = <Loader />;
    } else if(list.length === 0) {
      List = <div className="no-data">К сожалению, в данный момент нет данных для отображения</div>
    } else {
      List = list.map( item => {
          return <Person item={item} key={item.id}/>
        })
    }

    return (
      <React.Fragment>
        <div className="persons-layout container">
          {List}
        </div>
        <WatchMore />
      </React.Fragment>
    );
  }

}

export default PeopleList;
