const dbconnect=require('./mongodb');

const updateData=async()=>{
    let db=await dbconnect();
    let result=await db.updateOne(
     {name:"iphone 11"},{
        $set:{name:"iphone 11 pro max"}
     }
    )
    console.log(result);

}
updateData();



