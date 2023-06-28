var express = require('express');
var fs = require('fs');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/products',((req,res)=>{
    var products = JSON.parse(fs.readFileSync('products.json').toString());
    var productList = products.map((a)=>{
        return {title:a.title,id:a.id,image:a.image,description:a.desc,price:a.price,rating:a.rating.rate,reviews:a.rating.count}
    })
    console.log(productList);
    res.json(productList);
}))

// // app.get('/products/:id',(req,res)=>{
// //     var product = JSON.parse(fs.readFileSync('textfile.txt').toString());
// //     var productDetails = product.find((q)=>{
// //         if(q.id==req.params.id){
// //             return true;
// //         }
// //     })
// //     console.log(product);
// //     res.json(productDetails);
// // })

app.listen(4500,()=>{console.log('Server is running !!')})