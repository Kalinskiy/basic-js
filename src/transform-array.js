const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();

    let newArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        switch(arr[i]){
            case '--discard-next':
                i += 1;
                break;
            case '--discard-prev':
                if (i === 0 || arr[i - 2] === '--discard-next') break;
                newArr.pop();
                break;
            case '--double-next':
                if (i === arr.length - 1) break;
                newArr.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i === 0 || arr[i - 2] === '--discard-next') break;
                newArr.push(newArr[newArr.length - 1]);
                break;
            default:
                newArr.push(arr[i]);
                break;

        };
    };

    return newArr;
};