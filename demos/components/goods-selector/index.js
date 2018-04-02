;(function(angular) {

	'use strict';

	angular.module('app', ['ccms.components'])

		.controller('ctrl', function($scope, $ccGoodsSelector) {

			var selectedGoods = [
				{
					'id': '1',
					'name': '商品名称商品名称商品名称商品名称',
					'order': '排序',
					'status': '状态',
					'created': '创建时间',
					'modified': '更改时间',
					'lastSync': '同步时间',
					'shopId': '店铺ID',
					'picUrl': 'https://img.alicdn.com/bao/uploaded/i3/414285109/TB1rLzYbA9WBuNjSspeXXaz5VXa_!!0-item_pic.jpg_430x430q90.jpg',
					'detailUrl': 'https://detail.tmall.com/item.htm?id=44756970618&ali_refid=a3_419108_1006:1102969274:N:%E7%BE%BD%E7%BB%92%E6%9C%8D:6177e31faa2b329216fd0c090edd0881&ali_trackid=1_6177e31faa2b329216fd0c090edd0881&spm=a220m.1000858.0.0',
					'outerId': 'A1-2334-543',
					'price': '21',
					'quantity': '133',
					'listTime': '上架时间',
					'delistTime': '下架时间',
					'tags': ['标签'],
					'props': [
						{
							'pid': '属性ID',
							'pname': '属性名称',
							'vid': '属性值ID',
							'vname': '属性值名称'
						}
					],
					'categories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'shopCategories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'skus': [
					]
				},
				{
					'id': '2',
					'name': '商品名称商品名称商品名称商品名称',
					'order': '排序',
					'status': '状态',
					'created': '创建时间',
					'modified': '更改时间',
					'lastSync': '同步时间',
					'shopId': '店铺ID',
					'picUrl': 'https://img.alicdn.com/bao/uploaded/i3/414285109/TB1rLzYbA9WBuNjSspeXXaz5VXa_!!0-item_pic.jpg_430x430q90.jpg',
					'detailUrl': 'https://detail.tmall.com/item.htm?id=44756970618&ali_refid=a3_419108_1006:1102969274:N:%E7%BE%BD%E7%BB%92%E6%9C%8D:6177e31faa2b329216fd0c090edd0881&ali_trackid=1_6177e31faa2b329216fd0c090edd0881&spm=a220m.1000858.0.0',
					'outerId': 'A1-2334-543',
					'price': '21',
					'quantity': '133',
					'listTime': '上架时间',
					'delistTime': '下架时间',
					'tags': ['标签'],
					'props': [
						{
							'pid': '属性ID',
							'pname': '属性名称',
							'vid': '属性值ID',
							'vname': '属性值名称'
						}
					],
					'categories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'shopCategories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'skus': [
						{
							'id': '21',
							'name': '颜色：黄色；尺码：46；属性值1',
							'order': '排序',
							'status': '状态',
							'created': '创建时间',
							'modified': '更改时间',
							'lastSync': '同步时间',
							'outerId': 'A1-2334-543',
							'price': '23',
							'quantity': '100',
							'picUrl': 'https://img.alicdn.com/bao/uploaded/i3/414285109/TB2CYAflmfD8KJjSszhXXbIJFXa_!!414285109.jpg_430x430q90.jpg',
							'props': [
								{
									'pid': '属性ID',
									'pname': '属性名称',
									'vid': '属性值ID',
									'vname': '属性值名称'
								}
							]
						},
						{
							'id': '22',
							'name': '颜色：黄色；尺码：46；属性值1',
							'order': '排序',
							'status': '状态',
							'created': '创建时间',
							'modified': '更改时间',
							'lastSync': '同步时间',
							'outerId': 'A1-2334-543',
							'price': '23',
							'quantity': '100',
							'picUrl': 'https://img.alicdn.com/bao/uploaded/i4/414285109/TB2UGDHllDH8KJjSspnXXbNAVXa_!!414285109.jpg_430x430q90.jpg',
							'props': [
								{
									'pid': '属性ID',
									'pname': '属性名称',
									'vid': '属性值ID',
									'vname': '属性值名称'
								}
							]
						}
					]
				},
				{
					'id': '3',
					'name': '商品名称商品名称商品名称商品名称',
					'order': '排序',
					'status': '状态',
					'created': '创建时间',
					'modified': '更改时间',
					'lastSync': '同步时间',
					'shopId': '店铺ID',
					'picUrl': 'https://img.alicdn.com/bao/uploaded/i3/414285109/TB1rLzYbA9WBuNjSspeXXaz5VXa_!!0-item_pic.jpg_430x430q90.jpg',
					'detailUrl': 'https://detail.tmall.com/item.htm?id=44756970618&ali_refid=a3_419108_1006:1102969274:N:%E7%BE%BD%E7%BB%92%E6%9C%8D:6177e31faa2b329216fd0c090edd0881&ali_trackid=1_6177e31faa2b329216fd0c090edd0881&spm=a220m.1000858.0.0',
					'outerId': 'A1-2334-543',
					'price': '21',
					'quantity': '133',
					'listTime': '上架时间',
					'delistTime': '下架时间',
					'tags': ['标签'],
					'props': [
						{
							'pid': '属性ID',
							'pname': '属性名称',
							'vid': '属性值ID',
							'vname': '属性值名称'
						}
					],
					'categories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'shopCategories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'skus': [
						{
							'id': '31',
							'name': '颜色：黄色；尺码：46；属性值1',
							'order': '排序',
							'status': '状态',
							'created': '创建时间',
							'modified': '更改时间',
							'lastSync': '同步时间',
							'outerId': 'A1-2334-543',
							'price': '23',
							'quantity': '100',
							'picUrl': 'https://img.alicdn.com/bao/uploaded/i3/414285109/TB2CYAflmfD8KJjSszhXXbIJFXa_!!414285109.jpg_430x430q90.jpg',
							'props': [
								{
									'pid': '属性ID',
									'pname': '属性名称',
									'vid': '属性值ID',
									'vname': '属性值名称'
								}
							]
						}
					]
				},
				{
					'id': '18',
					'name': '商品名称商品名称商品名称商品名称',
					'order': '排序',
					'status': '状态',
					'created': '创建时间',
					'modified': '更改时间',
					'lastSync': '同步时间',
					'shopId': '店铺ID',
					'picUrl': 'https://img.alicdn.com/bao/uploaded/i3/414285109/TB1rLzYbA9WBuNjSspeXXaz5VXa_!!0-item_pic.jpg_430x430q90.jpg',
					'detailUrl': 'https://detail.tmall.com/item.htm?id=44756970618&ali_refid=a3_419108_1006:1102969274:N:%E7%BE%BD%E7%BB%92%E6%9C%8D:6177e31faa2b329216fd0c090edd0881&ali_trackid=1_6177e31faa2b329216fd0c090edd0881&spm=a220m.1000858.0.0',
					'outerId': 'A1-2334-543',
					'price': '21',
					'quantity': '133',
					'listTime': '上架时间',
					'delistTime': '下架时间',
					'tags': ['标签'],
					'props': [
						{
							'pid': '属性ID',
							'pname': '属性名称',
							'vid': '属性值ID',
							'vname': '属性值名称'
						}
					],
					'categories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'shopCategories': [
						{
							'cid': '类目ID',
							'cname': '类目名称'
						}
					],
					'skus': [
						{
							'id': '71',
							'name': '颜色：黄色；尺码：46；属性值1',
							'order': '排序',
							'status': '状态',
							'created': '创建时间',
							'modified': '更改时间',
							'lastSync': '同步时间',
							'outerId': 'A1-2334-543',
							'price': '23',
							'quantity': '100',
							'picUrl': 'https://img.alicdn.com/bao/uploaded/i3/414285109/TB2CYAflmfD8KJjSszhXXbIJFXa_!!414285109.jpg_430x430q90.jpg',
							'props': [
								{
									'pid': '属性ID',
									'pname': '属性名称',
									'vid': '属性值ID',
									'vname': '属性值名称'
								}
							]
						},
						{
							'id': '72',
							'name': '颜色：黄色；尺码：46；属性值1',
							'order': '排序',
							'status': '状态',
							'created': '创建时间',
							'modified': '更改时间',
							'lastSync': '同步时间',
							'outerId': 'A1-2334-543',
							'price': '23',
							'quantity': '100',
							'picUrl': 'https://img.alicdn.com/bao/uploaded/i4/414285109/TB2UGDHllDH8KJjSspnXXbNAVXa_!!414285109.jpg_430x430q90.jpg',
							'props': [
								{
									'pid': '属性ID',
									'pname': '属性名称',
									'vid': '属性值ID',
									'vname': '属性值名称'
								}
							]
						}
					]
				}
			];

			var taobaoWithShopList = [{shopId: 70866974, shopName: '数云食堂', plat: 'top'}, {shopId: 10001, shopName: 'JD数云食堂', plat: 'top'}];
			var jsWithShopList = [{shopId: 24058, shopName: 'JD数云食堂', plat: 'jos'}, {shopId: 24058, shopName: '数云食堂', plat: 'jos'}];
			var taobaoWithoutShopList = {shopId: 70866974, shopName: '数云食堂', plat: 'top'};
			var jdWithoutShopList = {shopId: 70866974, shopName: 'JD数云食堂', plat: 'jos'};

			// taobao + 店铺选择
			$scope.openTaobaoGoodsSelectorWithShopList = function() {
				$ccGoodsSelector
					.goodsSelector(taobaoWithShopList, selectedGoods)
					.open().result.then(function(response) {
						console.log('-----------ok-----------');
						console.log(response);
					}, function() {
						console.log('----------cancel---------');
					});
			};

			// jd + 店铺选择
			$scope.openJDGoodsSelectorWithShopList = function() {
				$ccGoodsSelector
					.goodsSelector(jsWithShopList, selectedGoods)
					.open().result.then(function(response) {
						console.log('-----------ok-----------');
						console.log(response);
					}, function() {
						console.log('----------cancel---------');
					});
			};

			// taobao 无店铺选择
			$scope.openTaobaoGoodsSelector = function() {
				$ccGoodsSelector
					.goodsSelector(taobaoWithoutShopList, selectedGoods)
					.open().result.then(function(response) {
						console.log('-----------ok-----------');
						console.log(response);
					}, function() {
						console.log('----------cancel---------');
					});
			};

			// jd 无店铺选择
			$scope.openJDGoodsSelector = function() {
				$ccGoodsSelector
					.goodsSelector(jdWithoutShopList, selectedGoods)
					.open().result.then(function(response) {
						console.log('-----------ok-----------');
						console.log(response);
					}, function() {
						console.log('----------cancel---------');
					});
			};

		});

})(window.angular);
