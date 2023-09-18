import { Router } from "express";
import { uploader } from "../src/middlewares/multer.js";

const router = Router();


router.post('/', uploader.single('file'), (req, res) => {
    const image  =req.body;
    console.log(req.file);
    res.status(200).send();
});

export default router;  