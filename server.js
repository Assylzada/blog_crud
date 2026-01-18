require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* Routes */
app.use("/blogs", blogRoutes);

/* Database Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((error) => console.error(error));
