const dotenv=require("dotenv").config({path:'./config.env'})

const app=require("./app")
const port =+dotenv.PORT || 8000;
app.listen(port,dotenv.URL);
