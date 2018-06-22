/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-03-08
 */
;(function(angular, undefined) {

	'use strict';

	angular
		.module('app', ['ccms.components'])
		.controller('appCtrl', function($ccValidator) {

			this.validators = {

				required: '要填东西哦亲!',

				number: /(^\s*$)|(^\d+$)/,

				handsome: {
					msg: '不够帅',
					fn: (modelValue, viewValue) => {
						const value = modelValue || viewValue;
						return value ? value.startsWith('kuitos') : !value;
					}
				},

				laoable: {
					msg: '不够捞',
					fn: (modelValue, viewValue) => {
						const men = modelValue || viewValue;
						return men.includes('kuitos');
					}
				},

				letter: {
					msg: '必须为字母',
					regex: /(^\s*$)|(^\w+$)/
				}

			};

			this.reset = function(formCtrl) {
				$ccValidator.setPristine(formCtrl);
			};

			this.validateGay = function() {
				$ccValidator.validate(this.gay).then(() => {
					console.log('校验成功!');
				}, () => {
					console.log('校验失败!');
				});
			};

			this.validate = function() {

				$ccValidator.validate(this.guy).then(() => {
					console.log('校验成功!');
				}, () => {
					console.log('校验失败!');
				});

			};

			// cc-dropdown-select options
			this.datalist = [
				{ title: 'kuitos', value: 'kuitos' },
				{ title: 'cat', value: '2' },
				{ title: 'fox', value: '3' }
			];

			this.test3 = [];

		});

})(window.angular);

