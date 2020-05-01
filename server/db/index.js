const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/gdtest',{useNewUrlParser:true},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("连接成功")
    }
})
const Schema = mongoose.Schema;
module.exports = Schema