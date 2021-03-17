# 说明

自定义信息上报

## 使用

``` js
const ctryInfomation = require('ctry-information-reported');
let ctryInfoRequest = new ctryInfomation('接口请求地址:例如http://baidu.com/api/');

// 调用实例相应的方法 请求会自动上报到 http://baidu.com/api/{FunName}  
// 例如：ctryInfoRequest.add({name:1})  会自动向服务器发送请求 http://baidu.com/api/add?name=1  

// 上报信息
ctryInfoRequest.add({
    type: 'member',
    userInfo: {
        username: 1
    }
})

// 查询上报信息
ctryInfoRequest.query({
    pageNum: 1,
    pageSize: 50,
    type: 'member'
}).then(res => {
    console.log(res)
})

// 删除上报信息，单个删除
ctryInfoRequest.deleteOne({
    username: 123
}).then(res => {
    console.log(res)
})

// 删除上报信息，全部删除
ctryInfoRequest.deleteAll().then(res => {
    console.log(res)
})
```
