
describe('Utils', function() {
    describe('#plus()', function() {
        it('should to something', function() {
            expect(true).toBeTruthy();
            expect(1).toEqual(1);
            expect(plus(2, 4)).toBe(6);
        });
    });

    describe('#map()', function() {
        it('should reverses a specified list(array)', function() {
            expect(map([0, 1, 2, 3], function(x){
                return x += 2;
            })).toEqual([2, 3, 4, 5]);
        });

        it('should reverses a specified list(object)', function() {
            var testObj = {
                1: [1, 2, 3],
                2: [4, 5, 6]
            };
            expect(map(testObj, function(x){
                return x;
            })).toEqual([[ 1, 2, 3 ], [ 4, 5, 6 ]]);
        });
        it('should return error if get not object or array', function() {
            expect(function() {
                var str = 'test me';
                map(str, function(x){
                    return x;
                })
            }).toThrowError('Incorrect input data format');
            expect(function() {
                var str = function(x){
                    return x;
                };
                map(str(),function(x){
                    return x;
                })
            }).toThrowError('Incorrect input data format');
        });
    });

    describe('#min()', function() {
        it('should return error if get not array', function() {
            expect(function() {
                var str = "hello";
                min(str)
            }).toThrowError('Incorrect input data format');
        });

        it('should return min variable from array', function() {
            var arr = [10, 5, 100, 2, 1000];
            expect(min(arr)).toBe(2);
        });
    });

    describe('#avg()', function() {
        it('should return average value of array', function() {
            var arr = [10, 20];
            expect(avg(arr)).toBe(15);
        });
        it('should return average value of array', function() {
            var arr = [10, 5, 100, 2, 1000];
            expect(avg(arr)).toBe(223.4);
        });
    });
});