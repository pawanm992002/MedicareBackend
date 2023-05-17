const mongoose = require("mongoose");

const DB = `mongodb+srv://pawanm992002:mishra@cluster0.siyne.mongodb.net/MediCare?retryWrites=true&w=majority`;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful to mongo");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });
