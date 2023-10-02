const mongoose= require("mongoose");

const url='mongodb+srv://nishubisht998:n1i2s3h4a5@cluster0.p2k8gby.mongodb.net/intership1?retryWrites=true&w=majority'

mongoose.connect(url)

.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
console.log(err);    
}); 
module.exports=mongoose;