import { getAllCountry, getAllMenues } from "../controllers/menuesController";
import express, { Router } from 'express'
const router:Router = express.Router()

router.get('/all-countries',getAllCountry)

router.get('/',getAllMenues)

export {router as menuRouter}