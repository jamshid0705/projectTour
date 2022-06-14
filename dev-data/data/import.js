const mongoose=require("mongoose")
const fs=require('fs')

const tourModel=require("../../model/TourModel")
const userModel=require("../../model/UserModel")

mongoose.connect('mongodb+srv://jamshid:jam07052000@cluster0.sqiyi.mongodb.net/TourJamshid?retryWrites=true&w=majority',{})
 .then(()=>{
   console.log("Basega ulandi...")
 })

const tourJson=JSON.parse(fs.readFileSync("./tours-simple.json","utf-8"))
const userJson=JSON.parse(fs.readFileSync("./users.json","utf-8"))

const addBase=async ()=>{
  try{
    await tourModel.create(tourJson)
    await userModel.create(userJson)
  } catch(err){
    console.log(err)
  }
}

const deleteBase=async ()=>{
  try{
    await tourModel.deleteMany()
    await userModel.deleteMany()
   process.exit()
  } catch(err){
    console.log(err)
  }
}
  
if(process.argv[2]==='--add'){
  addBase()
}
if(process.argv[2]==='--delete'){
  deleteBase()
}
