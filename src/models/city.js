const mongoose = require("mongoose");
const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      allowNull: false,
    },
    userEmail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const City = mongoose.model("City", citySchema);
module.exports = City;
