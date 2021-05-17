const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");

mongoose.connect(DB_URI);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 The book service is running on port: ", PORT);
})