export default class Time {
  dateObj

  constructor(dateString) {
    this.dateObj = new Date(dateString)
  }


  formattedTime() {
    let day = this.dateObj.getDate()
    let month = this.dateObj.getMonth()
    let year = this.dateObj.getFullYear()

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = `0${month}`;
    }

    return `${year}-${day}-${month}`;
  }
}