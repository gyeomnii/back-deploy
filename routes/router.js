import express from "express";
import {main, test} from "../controller/controller"

const router = express.Router();


router.get('/' , main)
router.post('/test' , test)

export default router;