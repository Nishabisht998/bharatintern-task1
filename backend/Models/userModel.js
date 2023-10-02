const {Schema,model} = require('../connection');
const mySchema=new Schema({
    email:String,
    password:String,
})
module.exports=model('user',mySchema)