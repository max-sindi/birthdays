const initialState = {
  activeLink: null,
  navbarLinks: [
    {
      name: 'recent',
      link: 'recent',
      text: 'Недавние даты',
    }, {
      name: 'today',
      link: '',
      text: 'Сегодня',
    }, {
      name: 'soon',
      link: 'soon',
      text: 'Ближайшие даты',
    },
  ],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTIVE_LINK': {
      return {
        ...state,
        activeLink: action.activeLink,
      }
    }

    default: {
      return state;
    }
  }
}
