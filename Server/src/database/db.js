
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/e-Commerce';
mongoose.connect(mongoDB, {useNewUrlParser: true ,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Successfully");
}).catch((error)=>{
    console.log("Connnection Faild........",error)
})