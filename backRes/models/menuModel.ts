import connectToDB from "../config/database";
import { AggregationCursor, Db, FindCursor, WithId } from "mongodb";
import { Document } from "mongodb";
let db:Db|null = await connectToDB() ?? null

function getAllMenues():Promise<WithId<Document>[]>{
    if(db === null){
        throw new Error("can't connect to mongoDB");
    }    
    try{
        const result:Promise<WithId<Document>[]> = db.collection("menues").find({}).toArray();
        return  result
    }catch(error){
        throw new Error("can't get menues")
    }
}

async function getCountryOfAllFood(): Promise<Document[]>{
    if(db === null){
        throw new Error("can't connect to mongoDB");
    }    
    try{
        const result:Promise<Document[]> =  db.collection("menues").aggregate([{
            "$group":{
                "_id":"$country"
            }
        },
        {
            "$sort":{
                "_id":-1
            }
        }
        ]).toArray();
        return  result
    }catch(error){
        throw new Error("can't get menues")
    }
}

async function getAllFoodCategory(): Promise<Document[]>{
    if(db === null){
        throw new Error("can't connect to mongoDB");
    }    
    try{
        const result:Promise<Document[]> =  db.collection("menues").distinct("category",{});
        return  result
    }catch(error){
        throw new Error("can't get menues")
    }
}

export {getCountryOfAllFood,getAllMenues,getAllFoodCategory}