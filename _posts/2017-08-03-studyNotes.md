---
layout: post
title: 面向对象的程序设计(二) 学习笔记
date: 2017-08-03
categories: blog
tags: [study,note,属性类型,继承,组合继承]
description: 属性类型
---

## 属性类型

组合使用构造函数模式和原型模式
(不用,了解)

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

关于继承中原型包含引用类型只所带来的问题:

即伪造对象或者经典继承:
(不用,了解)

        function SuperType(){
            this.color = ["red","yellow","green"];
        }
        function SubType(){
            SuperType.call(this);//.apply(this);  //this后还可以跟参数，便于在调用SuperType的含参构造函数
        }
        var instance1 = new SubType();
        instance1.color.push("back");
        alert(instance1.color);//"red","yellow","green","back"
        var instance2 = new SubType();
        alert(instance2.color);//"red","yellow","green"

组合继承:

        function SuperType(name,age,sex){
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.color = ["red","green","yellow"];
        }
        SuperType.prototype.sayHello = function(){
            alert("hello! " + this.name);
        };
        function SubType(name,age,sex,typeTem){
            SuperType.call(this,name,age,sex);
            this.typeTem = typeTem;
        }
        //继承 
        SubType.prototype = new SuperType();
        SubType.prototype.saytypeTem = function(){
            alert("typeTem is " + this.typeTem);
        };
        var instance1 = new SubType("tom",12,"man","warm");
        instance1.color.push("black");
        alert(instance1.color);//"red","green","yellow","black"
        instance1.sayHello();//hello tom
        instance1.saytypeTem();//typeTem is warm
        var instance2 = new SubType("susan",24,"woman","cold");
        alert(instance2.color);//"red","green","yellow"
        instance2.sayHello();//hello susan
        instance2.saytypeTem();//typeTem is cold

寄生组合式继承:
        
        function SuperType(name,age,sex){
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.color = ["red","green","yellow"];
        }
        SuperType.prototype.sayHello = function(){
            alert("hello! " + this.name);
        };
        function SubType(name,age,sex,typeTem){
            SuperType.call(this,name,age,sex);
            this.typeTem = typeTem;
        }
        function inheritPrototype(SubType,SuperType){
            var prototype = object(superType.prototype);
            prototype.constructor = SubType;
            SubType.prototype = prototype;
        }
        //继承 
        inheritPrototype(SubType,SuperType);
        SubType.prototype.saytypeTem = function(){
            alert("typeTem is " + this.typeTem);
        };
