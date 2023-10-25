const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use("/teachers", require("./routes/teacherRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
