const dotenv=require("dotenv").config({path:'./config.env'})
const app=require("./app")
const mongoose=require("mongoose")
const { config } = require("dotenv")


const port =+dotenv.PORT || 8000;
app.listen(port,dotenv.URL);


const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)  // savol nima un precess.env dotenv emas
console.log(DB)
mongoose.connect(DB,{}).then(()=>{
  console.log("Databasega ulanish hosil qilindi...")
})
.catch(err=>{
  console.log(err)
})

