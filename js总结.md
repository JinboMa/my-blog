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

### lqbz_node_server package.json

{
  "name": "lqbz_node_server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "supervisor server.js"
  },
  "author": "JinboMa",
  "license": "MIT",
  "dependencies": {
    "kcors": "^2.2.1",
    "koa": "^2.3.0",
    "koa-bodyparser": "^4.2.0",
    "koa-favicon": "^2.0.0",
    "koa-logger": "^3.0.1",
    "koa-oauth-server": "^1.0.1",
    "koa-router": "^7.2.1",
    "koa-session": "^5.4.0",
    "koa-static": "^4.0.1",
    "mongoose": "^4.11.3"
  },
  "devDependencies": {
    "babel-eslint": "^7.2.3",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-register": "^6.24.1",
    "eslint": "^4.3.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.1.1",
    "eslint-plugin-promise": "^3.5.0",
    "eslint-plugin-standard": "^3.0.1",
    "eventsource-polyfill": "^0.9.6"
  }
}

### ppt-live package.json

{
  "name": "vue-cli",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "JinboMa <596756194@qq.com>",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "start": "node build/dev-server.js",
    "build": "node build/build.js",
    "lint": "eslint --ext .js,.vue src"
  },
  "dependencies": {
    "axios": "^0.16.2",
    "highlight.js": "^9.12.0",
    "marked": "^0.3.6",
    "prismjs": "^1.6.0",
    "vue": "^2.3.3"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^7.1.1",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^2.0.1",
    "connect-history-api-fallback": "^1.3.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "cssnano": "^3.10.0",
    "eslint": "^3.19.0",
    "eslint-config-standard": "^6.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-html": "^3.0.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^2.0.1",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.14.1",
    "extract-text-webpack-plugin": "^2.0.0",
    "file-loader": "^0.11.1",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "html-webpack-plugin": "^2.28.0",
    "http-proxy-middleware": "^0.17.3",
    "opn": "^5.1.0",
    "optimize-css-assets-webpack-plugin": "^2.0.0",
    "ora": "^1.2.0",
    "pug": "^2.0.0-rc.2",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^12.1.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.3.3",
    "webpack": "^2.6.1",
    "webpack-bundle-analyzer": "^2.2.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.18.0",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}

### pptlive build/dev-server.js

var markdown = require('../config/markdown')

app.get('/markdown', function (req, res) {
  res.send(markdown())
})

### pptlive config/markdown.js

let fs = require('fs')
let marked = require('marked')
let highlight = require('highlight.js')
let Prism = require('prismjs')
let path = require('path')
let mdPath = path.join(__dirname, '../show.md')

marked.setOptions({
  highlight: function (code) {
    // return highlight.highlightAuto(code).value
    return Prism.highlight(code, Prism.languages.javascript)
  }
})

function markdown() {
  let res = { con: '', page: 'home', children: [] }
  let str = fs.readFileSync(mdPath, 'utf-8')
  let children = str.split(/[\n\r\s]##\s/)
  res.con = marked(children.shift())
  children.forEach((child, index) => {
    let second_res = { con: '', page: '', children: [] }
    let seconds = child.split(/[\n\r\s]###\s/)
    let childrenData = []
    second_res.con = marked(`## ${seconds.shift()}`)
    second_res.page = `${index + 1}`
    seconds.forEach((item, num) => {
      childrenData.push({
        con: marked(`### ${item}`),
        page: `${index + 1}-${num + 1}`
      })
    })
    second_res.children = childrenData
    res.children.push(second_res)
  })
  return res
}
markdown()
module.exports = markdown

### pptlive readme

# live-ppt

## 使用环境

- "node": ">= 4.0.0" (推荐7.6.0)

- "npm": ">= 3.0.0"

## 使用步骤

- 替换跟路径的 `show.md`文件（文件名不能修改）

- 文件根路径运行 `npm install`

- 安装完成后运行 `npm run dev`

- 注:项目启动在 `http://localhost:2500`

- 注:页面右下角为控制器

## 快捷键

- `home` => 回到首页

- `PageUp` => 放大

- `PageDown` => 缩小

- `ctrl + Enter` => 刷新

- `方向键` => 上下左右

## 配置项

- 文件名修改: `./config/markdown.js` -> `let mdPath = path.join(__dirname, '../show.md')`

- 样式修改: `./src/assets/styl/setting.styl` -> 根据需要修改即可

## markdown格式

- `#` => 首页

- `##` => 二级目录

- `###` => 三级目录

- 注意:`#`之后的内容到下一个遇到的`##`都为首页内容

- 注意:`##`之后的内容到下一个遇到的`###`或`##`都为二级目录的内容

- 注意:`###`之后的内容到下一个遇到的`###`都为三级目录的内容

## 其他

- [eslint standard 规则文档](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)

### pptlive main.js

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

### pptlive App.vue

<template lang="pug">
  .app
    //- show-img(url="./static/imgs/1.png")
    //- show-img(url="./static/imgs/2.png")
    //- show-img(url="./static/imgs/3.png")
    control(v-model="currentPage", @getMarkdown="getMarkdown", :data="children")
    transition(enter-active-class="animated fadeInLeft", leave-active-class="animated fadeOutUp")
      home(:content="home.con", v-show="currentPage === home.page")
    second(v-for="second in children", :key="second.page", :content="second.con" v-show="currentPage === second.page")
    .child(v-for="second in children", :key="second.page")
      third(v-for="third in second.children", :key="third.page", :content="third.con", v-show="currentPage === third.page")
</template>

<script>
import axios from 'axios'
import Home from '@/components/page/Home'
import Second from '@/components/page/Second'
import Third from '@/components/page/Third'
import Control from '@/components/Control'
import ShowImg from '@/components/ShowImg'
export default {
  name: 'app',
  components: { Home, Second, Third, Control, ShowImg },
  data () {
    return {
      home: {
        con: '',
        page: 'home'
      },
      children: [],
      currentPage: 'home'
    }
  },
  created () {
    this.getMarkdown()
  },
  methods: {
    getMarkdown () {
      axios.get('/markdown').then(res => {
        this.home = {
          con: res.data.con,
          page: res.data.page
        }
        this.children = res.data.children
      })
    }
  }
}
</script>

<style lang="stylus">
@import '../static/font-awesome/css/font-awesome.min.css'
@import '../static/animate.css'
@import './assets/styl/common/init'
@import './assets/styl/common/code'
@import './assets/styl/page/home'
@import './assets/styl/page/second'
@import './assets/styl/page/third'
</style>
