import connectToDB from "../config/database";
import { Db } from "mongodb";
let db:Db|null = await connectToDB() ?? null

function getCountryOfAllFood(){
    if(db === null){
        throw new Error("can't connect to mongoDB");
    }    
    try{
        db.collection("menues").find({
            
        });
    }catch(error){

    }
}