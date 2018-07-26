import React, { Component } from 'react';
import './styles/Person.css';

class Person extends Component {

  render() {
    const { name, jobTitle, birthdayString, avatarUrl } = this.props.item;

    return (
      <div className="person">
        <div className="person__inner">

          <div className="person__avatar">
            <img src={`http://test.anromsocial.com/${avatarUrl}`} className="person__avatar-img" alt="avatar" />
          </div>

          <div className="person__info">
            <div className="person__name">
              {name}
            </div>
            <div className="person__job">
              {jobTitle}
            </div>
            <div className="person__birthday">
              {birthdayString}
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Person;
