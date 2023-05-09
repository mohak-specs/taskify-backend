const mongoose=require('mongoose')

const NotificationSchema=new mongoose.Schema({
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    taskUpdate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TaskUpdate',
        required:true,
    },
    read:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('Notification',NotificationSchema);