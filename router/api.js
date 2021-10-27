import express from "express";
import { getCost, createCost, updateCost, deleteCost } from '../controllers/posts.js'
import { getSchedules, createSchedules, updateSchedules } from "../controllers/postsche.js";
import { sendmail } from "../controllers/sendmail.js"
const router = express.Router();

router.get('/api/Cost', getCost);
router.get('/api/Schedule', getSchedules);
router.post('/api/Cost', createCost);
router.post('/api/Schedule', createSchedules);
router.post('/api/Cost_update', updateCost);
router.post('/api/Schedule_update', updateSchedules);
router.post('/api/Cost_delete', deleteCost);
router.post('/api/Sendmail', sendmail);

export default router;