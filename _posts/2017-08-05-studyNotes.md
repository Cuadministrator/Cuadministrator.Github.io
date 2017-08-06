---
layout: post
title: 面向对象的程序设计(三) 学习笔记
date: 2017-08-05
categories: blog
tags: [study,note,递归,闭包,私有作用域]
description: 递归
---

## 递归调用

    var factorial = (function f(num){
        if(num<=1){
            return 1;
        }else{
            return f(n-1) * num;
        }
    });
>Ps:不用arguements.callee 严格模式不通过编译,不用factionrial(num-1)的原因是递归再次调用后会出现factorial不是函数的情况，导致错误；

## 闭包

>返回匿名函数,匿名函数的作用域会引用活动对象，只有当匿名函数销毁之后才能回收当前活动对象，所以需要解除对匿名函数的引用释放内存 

>Example: 匿名函数对象 = null;

>访问闭包中的 this和arguments的时候，必须把该对象的引用保存在另一个闭包能访问的变量中

>使用私有作用域

        function outputNuers(num){
            //私有定义域
            (function(num){
                for (var i = num; i > 0; i--) {
                    alert(i);
                }
            })(10);
        }
        alert(i);//error! 无法访问i
        outputNuers(10);
