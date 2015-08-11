function plus(a, b) {
    return a + b;
}

function min(list) {
    if(this.isArray(list)) {
        return list.reduce(function (a, b) {
            return ( a < b ? a : b );
        });
    } else {
        throw new Error('Incorrect input data format');
    }
}

function avg(list) {
    var val = 0, correct = 0;
    for(var i = 0; i < list.length; i++) {
        if(!isNaN(list[i])){
            val += list[i];
        } else {
            correct++;
        }

    }
    return val / (list.length - correct);
}

function map(list, iterator) {
    var tmpArr = [];
    if(this.isObject(list) || this.isArray(list)) {
        if (this.isObject(list)) {
            var tmpObj = {};
            for(var key in list) {
                if (list.hasOwnProperty(key)) {
                    tmpObj[key] = iterator(list[key]);
                    tmpArr.push(tmpObj[key]);
                }
            }
        } else if(this.isArray(list)) {
            for (var i = 0; i < list.length; i++) {
                tmpArr.push(iterator(list[i]));
            }
        }

        return tmpArr;
    } else {
        throw new Error('Incorrect input data format');
    }
}

function isArray(obj) {
    return Object.prototype.toString.call(obj).toUpperCase() === '[OBJECT ARRAY]';
}

function isObject(obj) {
    return Object.prototype.toString.call(obj).toUpperCase() === '[OBJECT OBJECT]';
}