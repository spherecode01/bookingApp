import express from "express"
import dotenv from 'dotenv';
import mongoose from "mongoose"
import authRoute from "./api/routes/auth.js";
import roomsRoute from "./api/routes/rooms.js";
import usersRoute from "./api/routes/users.js";
import hotelsRoute from "./api/routes/hotels.js";
import cookieParser from "cookie-parser";
import cors from 'cors';



const app = express();
dotenv.config();

const connect = async ()=> {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  app.use(cors({
    origin: 'https://helpful-muffin-78b947.netlify.app'
}));
 app.use(cookieParser());
 app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.get('/test', (req, res) => {
  res.json('test OK');
});

app.use((req,res,next,)=>{
  console.log("i am middleware");
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to Backend!!!!!")
})
