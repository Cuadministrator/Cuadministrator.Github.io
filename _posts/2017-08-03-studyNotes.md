---
layout: post
title: 面向对象的程序设计 学习笔记
date: 2017-08-03
categories: blog
tags: [study,note,属性类型]
description: 属性类型
---

## 属性类型

组合使用构造函数模式和原型模式

        function Person(name,age,job){
            this.name = name;
            this.age = age;
            this.job = job;
            this.friend = ["susan","tom","jery"];
        }
        Person.prototype = {
            constructor : Person,
            sayHello: function(){
                return ("Hello" + this.name);
            }
        }
        var person1 = new Person("tiny",28,"Software Engineer");
        var person2 = new Person("smith",21,"Doctor");

        person1.friend.push("holly");
        alert(person1.friend);//"susan","tom","jery","holly"
        alert(person2.friend);//"susan","tom","jery"
        alert(person1.friend == person2.friend); //false
        alert(person2.sayHello == person1.sayHello); //true


