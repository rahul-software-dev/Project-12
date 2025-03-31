const moment = require('moment-timezone');

const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss', timezone = 'Asia/Kolkata') => {
    return moment(date).tz(timezone).format(format);
};

const getCurrentTimestamp = () => {
    return moment().unix();
};

module.exports = { formatDate, getCurrentTimestamp };