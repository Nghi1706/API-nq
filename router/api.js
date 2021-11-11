import express from "express";
import { getCost, createCost, updateCost, deleteCost } from '../controllers/posts.js'
import { getSchedules, createSchedules, updateSchedules } from "../controllers/postsche.js";
import { getinfo, createinfo, updateinfo, deleteinfo } from '../controllers/admin.js';
const router = express.Router();

router.get('/api/Cost', getCost);
router.get('/api/Schedule', getSchedules);
router.post('/api/Cost', createCost);
router.post('/api/Schedule', createSchedules);
router.post('/api/Cost_update', updateCost);
router.post('/api/Schedule_update', updateSchedules);
router.post('/api/Cost_delete', deleteCost);
router.get('/api/Info', getinfo);
router.post('/api/Info', createinfo);
router.post('/api/Info_update', updateinfo);
router.post('/api/Info_delete', deleteinfo);
export default router;