# JS总结使用方法

# 1.Number

# 2.String

## 使用<font color=skyblue>模板字符串</font>

```javascript
let a = 'this is a'
let b = 10
console.log(`${a} , b is ${b}`)
// => this is a,b is 10
```

# 3.Array

## <font color=skyblue>拷贝数组</font>使用<font color=skyblue>扩展运算符</font>

```javascript
let items = [1, 2, 3, 4, 5]
let copyItems = [...items]
```

## 使用<font color=skyblue>Array.from</font>将类似数组的对象转为数组

```javascript
const foo = document.querySelectorAll('.foo')
const nodes = Array.from(foo)
```

## 数组排序使用sort函数

```javascript
let Arr = [10, 9, 15, 6, 7, 1, 0]

Arr.sort((a, b) => a - b)
// => [0, 1, 6, 7, 9, 10, 15]

Arr.sort()
// => [0, 1, 10, 15, 6, 7, 9]
```

```javascript
let ArrString = ['a', 'B', 'c', 'A', 'e', 'C', 'G', 'f', 'b']
ArrString.sort()
// => ["A", "B", "C", "G", "a", "b", "c", "e", "f"]
```

# 4.Object

## <font color=skyblue>class</font>的使用

```javascript
//定义类
// class Point {}

// let Point = class {}

// let p1 = new class {
//  constructor(name){
//      this.name = name
//  }    
//}('张三')
// p1.name // => "张三"

let Point = class Me {
    constructor(x, y) {
        this.x = x
        this.y = y
        Me.prototype.test()
        // return Object.create(null)
        // constructor方法默认返回实例对象（即this）
        // 完全可以指定返回另外一个对象。
        //point instanceof Point // => false
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')'
    }

    static classMethod() {
        return 'this only in Point'
    }
    
}

Object.assign(Point.prototype, {
    test() { console.log('test extend') }
})
// toString方法是Point类内部定义的方法，它是不可枚举的。
Object.keys(Point.prototype)
// => []
Object.getOwnPropertyNames(Point.prototype)
// => ["constructor","toString"]

let point = new Point(1, 2)
let p1 = new Point(2, 3)
let p2 = new Point(3, 2)

Point.classMethod()
// => "this only in Point"
point.classMethod()
// => TypeError: foo.classMethod is not a function

p1.__proto__ === p2.__proto__ // true

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true

// 可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性
Object.getPrototypeOf(point) // { constructor, toString, test }
```

## class的继承

```javascript
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')'
    }
}
// super关键字，它在这里表示父类的构造函数，用来新建父类的this对象
// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
// 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
// 如果不调用super方法，子类就得不到this对象。
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y) // 调用父类的constructor(x, y)
        this.color = color
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
```

# 5.Function

## 使用<font color=skyblue>解构赋值</font>为函数设置默认值

```javascript
function test({id = null, name = 'name', text}, ...values) {

    console.log(id, name, text, values)
    // => 5 "name" undefined [1, 2, 3, 4, 5]

    return { id, name, text, values }

}

var obj = {
    id: 5
}

let {id, name, text = 'text', values} = test(obj, 1, 2, 3, 4, 5)

console.log(id, name, text, values)
// => 5 "name" "text" [1, 2, 3, 4, 5]
```

# 6.Async

## Promise与async函数

```javascript
var action1 = (value) => {
    console.log('2.进入含有promise的函数')
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('3.promise返回结果')

            resolve('success')

        },2000)
    })
}
var asyncFunction = async (value) => {

    console.log(`1.进入async函数，传入参数${value}`)

    var c = await action1(value)

    console.log(`4.结束async函数，promise返回结果为${c}`)

    return '5.async返回了Promise对象'
}

asyncFunction(1).then(res => console.log(res))

// => 1.进入async函数，传入参数1
// => 2.进入含有promise的函数
// => 3.promise返回结果
// => 4.结束async函数，promise返回结果为success
// => 5.async返回了Promise对象
```