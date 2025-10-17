import {MongoClient} from "mongodb"
const host = process.env.HOST
const db = process.env.DATABASE

console.log(host)
async function connectToDB():Promise<MongoClient | null>{
    let client
    let conn
    if( host !== undefined){
        client = new MongoClient(host)
        try {
            return conn = await client.connect()
        } catch (error) {
            console.log("can't connect to"+ host)
        }
    }
    return null
}
const conn:Promise<MongoClient|null> = connectToDB()
export default conn
