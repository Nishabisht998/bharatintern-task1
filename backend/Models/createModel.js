const {Schema,model} = require('../connection');
const mySchema=new Schema({
    title:String,
    summary:String,
    image:String,

    
})
module.exports=model('create',mySchema)