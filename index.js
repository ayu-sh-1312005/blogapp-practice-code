const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.json());

require("dotenv").config();

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});


// database connect
const {dbConnect}=require("./config/database");
dbConnect();

const blogRoutes=require("./routes/blogs");
// mount
app.use("/api/v1",blogRoutes);

app.get("/",(req,res)=>{
    res.send("HE ll o World");
});
