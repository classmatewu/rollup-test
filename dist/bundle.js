(function (utils) {
	'use strict';

	// const test = 'hello'
	var query = 'Rollup';
	// 调用 ajax 函数
	utils.ajax( 'https://api.example.com?search=' + query ).then( handleResponse );

})(utils);
