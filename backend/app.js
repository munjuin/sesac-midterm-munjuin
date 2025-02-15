const express = require("express");
const app = express();
const PORT = 8080;
const router = require("./routes/index");
const { sequelize } = require("./models/index");

app.use("/todos", router);

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running! Port number is ${PORT} ...`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
