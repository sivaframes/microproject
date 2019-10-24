import mongoose from "mongoose";
const details_schema = new mongoose.Schema({
    imgname :{
        type:String
    },
    imgpath:{
        type:String
    },
    firstname :{
        type:String
    },
    lastname: {
        type:String
    },
    jobrole : {
        type:String
    },
    gender:{
        type:String
    },
    skills:{
        type:Array
    },
    experience : {
        type:String
    },
    ctc : {
        type:String
    },
    createdate :{
        type:Date,
        default:Date.now()
    }

})
export const detailsmodel = mongoose.model("details",details_schema);