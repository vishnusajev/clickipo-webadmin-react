import moment from 'moment';

export function parseDate(date) {
  const dateStr = moment(date);
  const dateComponent = dateStr.utc().format(('MMM D, YYYY'));
  return dateComponent;
}

export function currency(num) {
  return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}
