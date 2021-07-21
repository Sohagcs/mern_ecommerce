const mongoose  = require("mongoose");

//var mongoURL = 'mongodb+srv://Bittu87:shut#12345@cluster0.dkuc0.mongodb.net/mern-pizza'
// var mongoURL = 'mongodb+srv://arnab:2@u8qSpTcxLmyMe@cluster0.qbiwo.mongodb.net/mern-pizza'
var mongoURL = 'mongodb+srv://sathya:sathyapr@cluster0.dkuc0.mongodb.net/mern-pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection 

db.on('connected' , () => {
    console.log(`mongodb connection successfull`);
})

db.on('error' , () => {
    console.log(`mongodb connection failed`);
})

module.exports = mongoose