const dbconnect=require('./mongodb');

const data=async()=>{
    let db=await dbconnect();
    let result= await db.insertMany(
       [{name:'1+ nord 2',category:'mobile',price:456,color:'blue'},
        {name:'1+ nord 2',category:'mobile',price:456,color:'blue'},
        {name:'1+ nord 2',category:'mobile',price:456,color:'blue'},
        {name:'1+ nord 2',category:'mobile',price:456,color:'blue'},
        {name:'1+ nord 2',category:'mobile',price:456,color:'blue'},]


    )
   if(result.acknowledged===true) console.log("Data add Successfully");
}
data();