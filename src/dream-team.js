const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    if (members.length) {
        let arr2 = members.map((element) => {
            if (typeof element === "string") {
                return element.trim()[0].toUpperCase()
            }
        });
        return arr2.sort().join("");


    }
};

