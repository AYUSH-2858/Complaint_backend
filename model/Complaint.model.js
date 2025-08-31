import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    type:{
        enum:["B&R","E&N"],
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true}
        
},{
            timestamps:true
        })


const ComplaintModel = mongoose.model("complaint",ComplaintSchema);

export {ComplaintModel};        