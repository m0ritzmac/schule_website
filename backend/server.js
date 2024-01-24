const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(cors()); // Invoke the cors function as middleware

app.use("/teachers", require("./routes/teacherRoutes"));

app.use("/grades", require("./routes/gradeRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
