# zc-plugins

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 下拉框使用示例
###全局引入
import zcskuidropdownlist from "zcsk-ui-dropdownlist"
import 'zcsk-ui-dropdownlist/dist/zc-plugins.css'

###按需引入
babel配置
npm i babel-plugin-import --save-dev
{
  "plugins": [
    [
     "import",
      {
        "libraryName": "zc-plugins", // 组件名
        "libraryDirectory": "components" // 组件源码包名
      }
    ]
  ]
}


import 'zcsk-ui-dropdownlist/dist/zc-plugins.css'
import { DropdownList } from "zcsk-ui-dropdownlist";


学习文档：
https://www.bilibili.com/video/BV1Zf4y1u75o?from=search&seid=4896830209811412423&spm_id_from=333.337.0.0
https://juejin.cn/post/6855574498390769677