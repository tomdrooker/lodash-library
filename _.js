const _ = {

    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        };

        if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        };
        
        const isInRange = start <= number && number < end ? true : false;
        return isInRange; 
    },

    words(string) {
        return string.split(" ");
    },

    pad(string, length) {
        if (length <= string.length) {
            return string;
        };
        
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);

        return paddedString;
        
    },

    has(object, key) {
        const hasValue = object[key] != undefined ? true : false;
        return hasValue;
    },

    invert(object) {
        const invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject[originalValue] = key;
        } 
        return invertedObject;
    },

    findKey(object, predicate) {
        for (let key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);

            if (predicateReturnValue === true) {
                return key;
            }
        }
        return undefined;
    }

};




// Do not write or modify code below this line.
module.exports = _;