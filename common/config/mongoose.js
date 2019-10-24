import mongoose from "mongoose";

const databse = "microproject";
const host = "127.0.0.1";
const dialect = "mongodb";
const port = 27017;

const connectdbURL = `${dialect}://${host}:${port}/${databse}`;

export default mongoose.connect(connectdbURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})