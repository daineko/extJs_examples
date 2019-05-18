//************************ Простейши лейаут ************************//
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Приложение на Ext JS 4',
                    html : '<h3>Добро пожаловать в мир Ext JS 4!</h3>'
                }
            ]
        });
    }
});


//************************ Обычные классы ************************//
Ext.define('Classes.Person', {
    name: 'Eugene',
    surname : 'Popov',


    getinfo: function() {
        console.log("Полное имя : " + this.name + " " + this.surname);
    }
});

// var eugene = Ext.create('Classes.Person');
// eugene.getinfo();

//************************ Коснтрукторы ************************//
Ext.define('Classes.Pchelovek', {
    name: 'Eugene',
    surname : 'Popov',
    // конструктор объекта
    constructor: function(name, surname) {
        if (name && surname) {
            this.name = name;
            this.surname = surname;
        }
    },
    getinfo: function()
    {
        alert("Полное имя : " + this.name + " " + this.surname);
    }
});

// var pchel = new Classes.Pchelovek('Bill', 'Gates');
// pchel.getinfo();

//************************ Статические свойства (методы) ************************//
Ext.define('MyClass', {
    statics: {
        staticField: 'I am static field',
        staticMethod: function() {
            console.log('Static method');
        }
    }
});

// console.log(MyClass.staticField);
// console.log(MyClass.staticMethod());

//************************ Наследование ************************//
Ext.define('Pet', {
    name: 'Sobaka',
    constructor: function(fio) {
        this.name = fio;
    },
    ktoeto: function() {
        console.log('Hello');
    }
});

Ext.define('Dog', {
    extend: 'Pet',
    bark: function() {
        console.log(this.ktoeto());
    },
    // переопределение методов
    // ktoeto: function () {
    //     console.log(123);
    // }
});

var jivotnoe = new Dog('Sharik');
jivotnoe.bark();

