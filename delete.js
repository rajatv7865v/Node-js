const dbconnect=require('./mongodb')


const updateData=async()=>{
    const db=await dbconnect();
    let result=await db.deleteOne(
        {name:'iphone 12'}
    )
    console.log(result);

}
updateData();