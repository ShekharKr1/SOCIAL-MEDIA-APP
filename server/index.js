import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";

// routes
import AuthRoute from './routes/AuthRoute.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'
import ChatRoute from './routes/ChatRoute.js'
import MessageRoute from './routes/MessageRoute.js'

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());



// to serve images inside public folder
app.use(express.static('public'));
app.use('/images', express.static('images'));


dotenv.config();
const PORT = process.env.PORT;

const CONNECTION = process.env.MONGO_DB;
mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}............`)))
    .catch((error) => console.log(`${error} did not connect`));


app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)


//-----------------------------------------Deployement----------------------------------------------

const __dirname1 = path.resolve()
if (process.env.NODE_ENV === "productions") {
    app.use(express.static(path.join(__dirname1, "/client/build")));


    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
    });


} else {
    app.get("/", (req, res) => {
        res.send("API Running Succesfully......")
    })
}


//-----------------------------------------Deployement----------------------------------------------


