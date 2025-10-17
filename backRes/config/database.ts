import {Db, MongoClient} from "mongodb"
const host:string  = process.env.HOST === undefined ? '' : process.env.HOST;
const database = process.env.DATABASE
const client = new MongoClient(host)

const connectToDB= async()=>{
    let conn:MongoClient
    try {
       conn = await client.connect()
        let db:Db = await conn.db(database)
        return db
    } catch (error) {
        console.log("can't connect to mongoDB on host " + host )
    }
}
export default connectToDB
