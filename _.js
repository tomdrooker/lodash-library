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
    }

};




// Do not write or modify code below this line.
module.exports = _;