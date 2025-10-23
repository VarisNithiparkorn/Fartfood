import { getAllFoodCategory, getCountryOfAllFood } from "../models/menuModel";
import { Request, Response } from "express";
import { Document } from "mongodb";
import { getAllMenues as allMenues } from "../models/menuModel";

const getAllCountry = async (req:Request,res:Response)=>{
    const country:Document[] = await getCountryOfAllFood()
    res.status(200).send(country)
}

const getAllMenues = async (req:Request,res:Response)=>{
    const menues:Document[] = await allMenues()
    res.status(200).send(menues)
}
const getAllCategories = async (req:Request,res:Response)=>{
    const categories:Document[] = await getAllFoodCategory()
    res.status(200).send(categories)
}



export{getAllCountry, getAllMenues, getAllCategories}