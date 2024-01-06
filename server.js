const express = require('express')
const app = express()
const data = [{
    id: 1,
    name: '华为mate60',
    price: 6900.00,
    image: 'https://www.wanwupai.com/upload/product/20200502/1588400093veuFu6.jpg',
    intro: '卫星童话，五地面网络，仍可接受卫星电话',
    max_order: 1,
    hot: true,
    high: true
}, {
    id: 2,
    name: '华为mate602',
    price: 6900.00,
    image: 'https://www.wanwupai.com/upload/product/20200502/1588400093veuFu6.jpg',
    intro: '卫星童话，五地面网络，仍可接受卫星电话',
    max_order: 1,
    hot: true,
    high: true
},{
    id: 3,
    name: '华为mate603',
    price: 6900.00,
    image: 'https://www.wanwupai.com/upload/product/20200502/1588400093veuFu6.jpg',
    intro: '卫星童话，五地面网络，仍可接受卫星电话',
    max_order: 1,
    hot: false,
    high: true
}]
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST')
    next()
})
app.get('/products', (req, res) => {
    res.json(data)
})
app.get('detail/:id', (req, res) => {
    const {
        id
    } = req.params
    const detail = data.find(item => item.id == id)
    res.json(detail)
})
app.listen(3000)