const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if(typeof str !== 'string') {
        str = String(str)
    }
    options.repeatTimes = options.repeatTimes || 1;
    options.separator = options.separator || '+';

    if(options.hasOwnProperty('addition')) {
        if(typeof options.addition !== 'string') {
            options.addition = options.addition + '';
        }
        options.additionRepeatTimes = options.additionRepeatTimes || 1;
        options.additionSeparator = options.additionSeparator || '|'

    } else {
        options.addition = ''
    }

    const separator = options.addition !== '' ?
        new Array(options.additionRepeatTimes)
            .fill(options.addition)
            .join(options.additionSeparator) :
        ''

    return new Array(options.repeatTimes)
        .fill(str + separator)
        .join(options.separator)
};