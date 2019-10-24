import {Router} from "express";
export const router = Router();
import * as details from "../controllers/detalscontroller";
import {upload} from "../middelware/uploadfile"
router.route("/create")
.post(upload.single('pic'),details.create);
router.route("/get")
.get(details.get)