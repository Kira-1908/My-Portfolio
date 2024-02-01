import mongoose from 'mongoose';

const connectDB = (DATABSEURL) =>{
    mongoose.connect("mongodb://127.0.0.1:27017",{
        dbName:'MyPortfolio'
    }).then(()=>console.log("databse is connected")).catch((e)=>console.log(e));    
}




//const connectDB = async(DATABASEURL)=>{

//    const DB ={
//        dbNAME:'MyPortfolio'
//    }
//    const data = await mongoose.connect(DATABASEURL, connectDB)
//    if(data){
//        console.log("database connected");
//    }
//}

export default connectDB;