
const reverse = function (str) {
    
    // if (!str) {
    //     return null;
    // }
    if (typeof str != 'string') {
        return null;
    }
    let newStr = '';
    for (var i = str.length - 1; i >= 0; i--) { 
        newStr += str[i]; 
    }
    return newStr;
}

const reverseNumber = function (str) {
    return 0;
}
    
module.exports = {reverse, reverseNumber}
