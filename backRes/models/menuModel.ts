import connectToDB from "../config/database";
import { AggregationCursor, Db } from "mongodb";
let db:Db|null = await connectToDB() ?? null

async function getCountryOfAllFood() :Promise<Document[]>{
    if(db === null){
        throw new Error("can't connect to mongoDB");
    }    
    try{
        const result:AggregationCursor<Document> = await db.collection("menues").aggregate([{
            "$group":{
                "_id":"country"
            }
        }]);
        return  result.toArray()
    }catch(error){
        throw new Error("can't get menues")
    }
}

export {getCountryOfAllFood}