const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./router/tourRouter');
const userRouter = require('./router/userRouter');

const app = express();

app.use(express.json()); // Middleware qorovulcha
app.use(morgan('common'));

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// static middleware
app.use(express.static(`${__dirname}/public`))


// app.use((req, res, next) => {
//   req.time = Date.now();
//   next();
// });

// App Users routing
// app.param("/api/v1/tours?name=umid",(req,res,next,val)=>{
//   console.log(val)
//   next()
// })



module.exports=app;
