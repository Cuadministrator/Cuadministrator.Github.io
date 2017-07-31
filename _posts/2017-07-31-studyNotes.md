---
layout: post
title: 引用类型(二) 学习笔记
date: 2017-07-30
categories: blog
tags: [study,note,引用类型,Array,Date,RegExp,Function]
description: 引用类型,Array,Date,RegExp,Function
---

## 引用类型

数组Array:

迭代方法：
>every(function)所有为true返回true 
>some(function)一个为true返回true 
>filter(function)返回满足条件的项 
>forEach(function)不返回 
>map(function)返回每次调用结果true or false

缩小方法：
>reduce(prev, cur, index, array) prev是前一项，cur是后一项
>reduceRight(prev, cur, index, array)

Date类型:

>var dateNow = Date.now();
>var date = new Date();

部分方法:
>toString() toLocaleString() 
>通过 ">" "<" 可以进行大小比较

RegExp类型：
>正则表达式
	·g 全局模式，匹配所有字符串
	·i 不区分大小写
	·m 到达一行文本末尾会继续查询下一行中是否存在与之模式匹配的项

	example:
	var pattern1 = /[bc]at/i; 匹配第一个bat或者cat
	var pattern1 = /\[bc\]at/i; 匹配第一个[bc]cat//[]已被转义字符转化
	var pattern2 = /.at/i; at结尾
	var pattern2 = /\.at/i; .at//.已被转义字符转化

Function类型:

		var sum = function(value1,value2){
			return (value1+value2);
		};//;分号注意
		function sum(value1 ,value2){
			return (value1+value2);
		}

>函数名为指向函数的指针
>没有重载！没有重载！没有重载！前后申明一个相同名字的函数会覆盖！

函数申明与函数表达式:
>解析器先读取函数的声明，使其在执行代码前可以访问，函数表达式需要等解析器执行到他所在的代码行，才会被真正的解释执行。

作为值的函数:

	function callSomeFunction(somefunction, someArgument){
		return someFunction(someArgument);
	}

	example:
		var sum = function(value1,value2){
            return (value1+value2);
        };
        var callSumFunction = function(somefunction,someArgument1,someArgument2){
            return (somefunction(someArgument1,someArgument2));
        };
        alert(callSumFunction(sum,1,2));


    function callSomeFunction(propertyName){
		return function(object1,object2){
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			//if(xxx){return;}
			//esle{return;}
		}
	}
	ps:用途在于，需要对某对象数组的属性进行排序，传入属性名称，就能很方便的对该属性的值进行排序。

函数内部属性:
>arguments和this
