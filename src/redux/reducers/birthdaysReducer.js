import uuid from 'uuid/v4';

const windowWidth = window.innerWidth;


const initialState = {
  usersList: null,
  skipCurrent: 0,
  usersLimit: windowWidth > 768 ? 6 : 3,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_GET_SUCCESS': {
      const { sortDirection } = action;
      const { skipCurrent, usersLimit } = state;

      const users = action.res.data.users.map(user => {
        const dateString = dateToString(user.birthday);

        return {
          ...user,
          id: uuid(),
          birthdayString: dateString,
        }

        function dateToString(date) {
          const dateValues = date.split('-');
          const day = +dateValues[2];
          const month = +dateValues[1];
          let resString;

          const monthesArray = ["Січня", "Лютня", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"];

          resString = `${day} ${monthesArray[month-1]}`;

          return resString;
        }

      });

      users.sort( (first, second) => {
        const firstDate = first.birthday.split('-');
        const secondDate = second.birthday.split('-');

        const firstMonth = +firstDate[1];
        const secondMonth = +secondDate[1];

        // firstly compare monthes
        if(firstMonth > secondMonth) {
          return -1 * sortDirection;
        } else if(firstMonth < secondMonth) {
          return 1 * sortDirection;
          // next compare days
        } else {
          const firstDay = +firstDate[2];
          const secondDay = +secondDate[2];

          if( firstDay > secondDay ) {
            return -1 * sortDirection;
          } else if( firstDay < secondDay ) {
            return 1 * sortDirection;
            // next compare name
          } else {
            const firstSurname = first.name.split(' ')[1];
            const secondSurname = second.name.split(' ')[1];

            if( firstSurname > secondSurname ) {
              return 1;
            } else if( firstSurname < secondSurname ) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      })

      return {
        ...state,
        usersCurrentList: users.slice(skipCurrent, usersLimit),
        usersList: users,
        skipCurrent: state.usersLimit,
      };
    }

    case 'LIST_CLEAR': {
      return {
        ...state,
        usersCurrentList: null,
        usersList: null,
        skipCurrent: initialState.skipCurrent,
      }
    }

    case 'WATCH_MORE': {
      const { skipCurrent=6, usersLimit=6 } = state;
      const users = state.usersList;
      const newSkip = skipCurrent + usersLimit;
      let newCurrentList = [];

      // don't know why but array.slice() work buggly
      for(let i = skipCurrent; i < newSkip; i++) {
        if( users[i] ) {
          newCurrentList.push( users[i] );
        } else {
          break;
        }
      }

      return {
        ...state,
        skipCurrent: newSkip,
        usersCurrentList: newCurrentList,
      }
    }

    default: {
      return state
    }

  }
}
