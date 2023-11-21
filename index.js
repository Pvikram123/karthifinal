const express=require("express")
const Mongoose=require("mongoose")
Mongoose.set('strictQuery', false);
const router=require("./routes/userRoute")
const authrouter=require("./routes/authRoutes")
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const jwt_auth=require('./auth/authvadalation')
const cookieParser = require("cookie-parser");
app.use(cookieParser())
app.use(express.json())

app.use('/try',router)
app.use('/',jwt_auth)
app.use('/exe',authrouter)


const uri =`mongodb://localhost:27017`;
Mongoose.connect(uri);
const PORT = process.env.PORT || 5035;
  app.listen(PORT, () => {
    console.log(`Port is running :`+" " + PORT);
  });