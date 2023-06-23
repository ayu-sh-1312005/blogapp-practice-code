const mongoose=require("mongoose");

exports.dbConnect=()=>{
    const dbUrl=process.env.DATABASE_URL;
    mongoose.connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("database connected successfully");
    })
    .catch((err)=>{
        console.log("error while connnecting to database");
        console.error(err);
        process.exit(1);
    });
};