window.onload = function(){
	var ques1 = prompt('Ваш бюджет на месяц?');
	var ques2 = prompt('Название вашего магазина?');
	var mainList = {
		budget: ques1,
		storeName: ques2
	};
	var shopgoods = [];
	var employers = {
		open: ''
	};
	var goodsType1 = prompt('Какой тип товаров будем продавать?');
	var goodsType2 = prompt('Какой тип товаров будем продавать?');
	var goodsType3 = prompt('Какой тип товаров будем продавать?');
	console.log(parseInt(ques1/30));
}