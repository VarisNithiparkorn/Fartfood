import { getCountryOfAllFood } from "../models/menuModel";
import { Request, Response } from "express";

const getAllCountry = async (req:Request,res:Response)=>{
    const country:Document[] = await getCountryOfAllFood()
    res.status(200).send(country)
}

export{getAllCountry}