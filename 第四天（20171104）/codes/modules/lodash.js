var _ = require('lodash');


//1. chunk分块
//['a', 'b', 'c', ‘d’, ‘e’] -> [['a', 'b'], ['c', 'd’], [‘e’]] 
var arr = ['a','b','c','d','e'];
// console.log(_.chunk(arr,2));

//2. 去重 uniq
//[2, 1, 2, 1] -> [2, 1] 
var arr1 = [2,1,2,1];
// console.log(_.uniq(arr1))

//3. chain链式调用
// [1, [2, [3, [4, 2]], 5]] -> [[1, 2], [3, 4], 5] 
//思路：先扁平化，然后去重分组
var arr2 = [1, [2, [3, [4, 2]], 5]];
//方法一、看起来比较多
// console.log(_.chunk(_.uniq(_.flattenDeep(arr2)),2)); 
//方法二、链式调用
// var result = _.chain(arr2)
//                 .flattenDeep()
//                 .uniq()
//                 .chunk(2)
//                 .value();
// console.log(result)
// 等价于
// var result = _(arr2)
//                 .flattenDeep()
//                 .uniq()
//                 .chunk(2)
//                 .value();
// console.log(result)

/*
    注： chain后续的方法不需要传入对应方法中的第一个参数，因为链式调用的方法能拿到上一个方法的返回值。
    最后需要调用.value()拿到真实值。
*/


//4. keyBy或者reduce
//[{id: 123, name: 'xxx'}, {id: 321, name: 'yyy’}] -> { '123': { id: 123, name: 'xxx' }, '321': { id: 321, name: 'yyy' } }
var arr3 = [
    {id:123, name:'xxx'},
    {id:321,name:'yyy'}
];

// console.log(_.keyBy(arr3,'id'));
var result2 = _.reduce(arr3,function(obj,value,key){
    obj[value.id] = value;
    return obj;
})
// console.log(result2)


//5. isEmpty     Checks if value is an empty object, collection, map, or set.

//可处理null,{},[]
console.log(_.isEmpty(null));
console.log(_.isEmpty({}));
console.log(_.isEmpty([]));




