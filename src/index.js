import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`server listen in the port number ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongodb connection failed", error);
  });

app.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
});
