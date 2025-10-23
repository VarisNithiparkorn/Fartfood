import { getAllCategories, getAllCountry, getAllMenues } from "../controllers/menuesController";
import express, { Router } from 'express'
const router:Router = express.Router()

router.get('/all-countries',getAllCountry)

router.get('/all-categories',getAllCategories)

router.get('/',getAllMenues)

export {router as menuRouter}