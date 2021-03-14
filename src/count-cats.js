const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let num = 0;
    let fullArray = [].concat(...matrix);
    fullArray.map(el => {
        if (el === '^^') {
            num += 1
        }
    })
    return num;

};
