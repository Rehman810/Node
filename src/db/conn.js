import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://AbdulRehman:lovekarachi786@cluster0.5qeavaa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("no connection===>", err));
