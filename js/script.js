window.onload = function(){
	var ques1 = prompt('Ваш бюджет на месяц?');
	var ques2 = prompt('Название вашего магазина?');
	var goodsType1 = prompt('Какой тип товаров будем продавать?');
	var goodsType2 = prompt('Какой тип товаров будем продавать?');
	var goodsType3 = prompt('Какой тип товаров будем продавать?');
	var mainList = {
		budget: ques1,
		storeName: ques2,
		shopGoods: [goodsType1, goodsType2, goodsType3],
		employers: {},
		open: false
	};
	
	
	
	console.log(parseInt(ques1/30));
}