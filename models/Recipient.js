const mongoose=require('mongoose')
const Schema=mongoose.Schema

const RecipientSchema=new Schema({
    email:String,
    responded:{type:Boolean,default:false}
})

module.exports=RecipientSchema