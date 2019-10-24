import http from "http";
import bodyParser from "body-parser";
import express from "express";
import logger from "morgan";
import {router} from "../Node/routes";
import db from  "../Node/common/config/mongoose";

const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname+'/assets/uploads'))
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
server.listen(5005,"127.0.0.1",() =>{
        console.log("server running at 5003 port ")
});
db.then(()=> {
    console.log("db connected ")
}, err => {console.log("Error came")})