const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nickName: { type: String, unique: true },
    addr: { type: String },
    email: { type: String, unique: true },
    phoneNumber: { type: String, unique: true },
  },
  {
    collection: "boardwalk",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
