const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DebugFileSchema = new Schema({
  date: { type: Date, default: Date.now },
  fileName: String,
});
const DebugFile = mongoose.model("DebugFile", DebugFileSchema);

module.exports = DebugFile;
