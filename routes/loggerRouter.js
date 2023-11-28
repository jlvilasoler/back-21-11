import { Router } from "express";
import { logger } from '../src/utils/logger.js';
import { getProdFilterPaginateController } from "../src/Controllers/ProductController.js";

const router = Router();

//router de Productos y paginación:
router.get("/", /*privateRoutes,*/ async (req, res) => {
    await getProdFilterPaginateController(req, res);
    logger.debug("debug");
    logger.info("info");
    logger.warn("warning");
    logger.error("error");
});

export default router;