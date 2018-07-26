import axios from 'axios';

class BirthdaysApi {
  constructor() {
    this.path = 'http://test.anromsocial.com/api/birthdays';
  }

  getTodayList = () => {
    const { checkDay } = this;
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const dateFrom = `${currentMonth+1}.${ checkDay(currentDay) }`;
    let dateTo = `${currentMonth+1}.${ checkDay(currentDay) }`;

    // if today 28 February of not leap year, we will include in view persons who have birthday
    // in 29 February
    if(
      currentYear % 4 !== 0
      && currentMonth === 1
      && currentDay === 28
    ) {
      dateTo = `${currentMonth+1}.${currentDay + 1}`;
    }

    return axios.get(`${this.path}?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  }

  getRecentList = () => {
    const amountOfRecentDays = 14;
    const { dateCurrent, dateAnother } = this.createDateRange(-amountOfRecentDays, -1);

    const dateTo = `${dateCurrent.month}.${dateCurrent.day}`;
    const dateFrom=`${dateAnother.month}.${dateAnother.day}`;

    return axios.get(`${this.path}?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  }

  getSoonList = () => {
    const amountOfSoonDays = 14;

    const { dateCurrent, dateAnother } = this.createDateRange(amountOfSoonDays, +1);

    const dateTo=`${dateAnother.month}.${dateAnother.day}`;
    const dateFrom = `${dateCurrent.month}.${dateCurrent.day}`

    return axios.get(`${this.path}?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  }

  // it return object, which has props which already ready to be sended in request
  createDateRange = (dateRange, dateStart=0) => {
    const {checkDay} = this;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();

    const rangeDate = new Date(currentYear, currentMonth, currentDay + dateRange);
    const startDate = new Date(currentYear, currentMonth, currentDay + dateStart);

    const datesStore = {
      dateCurrent: {
        month: startDate.getMonth() + 1,
        day: checkDay( startDate.getDate() ),
      },
      dateAnother: {
        month: rangeDate.getMonth() + 1,
        day: checkDay( rangeDate.getDate() ),
      }
    }

    return datesStore;
  }

  // if we have '1' day, we return '01', until number 9
  checkDay = day => {
    if( day.toString().length === 1 ) {
      return `0${day}`;
    }

    return day;
  }
}


export default new BirthdaysApi();
