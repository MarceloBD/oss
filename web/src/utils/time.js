import moment from 'moment-timezone';

moment.locale('pt-BR');

export default (value, format) => {
  return moment(value)
    .tz(moment.tz.guess())
    .format(format);
};
