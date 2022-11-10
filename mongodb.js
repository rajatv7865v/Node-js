const {MongoClient}=require('mongodb')

const url='mongodb://localhost:27017';

const database='e-comm';

const client=new MongoClient(url);

async function dbconnect(){
    let result=await client.db(database)
    let 
}