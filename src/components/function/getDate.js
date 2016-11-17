import moment from 'moment'

Date.prototype.getMonthName = function() {
    var month = ['Января','Февраля','Марта','Апреля','Мая','Июня',
    'Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    return month[this.getMonth()];
}

Date.prototype.getFullMinutes = function () {
   if (this.getMinutes() < 10) {
       return '0' + this.getMinutes();
   }
   return this.getMinutes();
};




export default function getDate(date) {
  var curDate = moment(date, 'YYYY-MM-DD HH:mm:ss');
  var now = new Date()
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf()
  var other = curDate.valueOf()
  if (other < today - 86400000) { // 24*60*60*1000
      // раньше чем вчера
    return(curDate.getDay()+ ' '+curDate.getMonthName() + ' ' + curDate.getFullYear())
  } else if (other < today) {
    return('Вчера')
      // вчера
  } else {
    return('Cегодня, ' + curDate.getHours()+':'+curDate.getFullMinutes())
      // сегодня или потом
  }
}