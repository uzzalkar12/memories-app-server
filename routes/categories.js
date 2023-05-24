import express from "express";
import { getCategories, createCategory } from '../controllers/categories.js'

const router = express.Router();

router.get('/all', getCategories)
router.post('/store', createCategory)

export default router;