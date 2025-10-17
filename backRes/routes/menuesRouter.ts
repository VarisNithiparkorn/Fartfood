import { getAllCountry } from "../controllers/menuesController";
import express, { Router } from 'express'
const router:Router = express.Router()

router.get('/all-countries',getAllCountry)