import Mock from 'mockjs'

export default (function () {
    Mock.mock(/\/articles$/, 'get', {
        code: 0,
        message: 'success',
        data: {}
    })
})()