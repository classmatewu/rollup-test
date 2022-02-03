// const test = 'hello'
// console.log(test);

// 使用 CommonJS 导入(import)完整的 utils 对象
// const utils = require( 'utils' );
// const query = 'Rollup';
// // 使用 utils 对象的 ajax 方法
// utils.ajax( 'https://api.example.com?search=' + query ).then( handleResponse );

// 使用 ES6 import 语句导入(import) ajax 函数
import { ajax } from 'utils';
var query = 'Rollup';
// 调用 ajax 函数
ajax( 'https://api.example.com?search=' + query ).then( handleResponse );