const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DebugFileSchema = new Schema({
  fileName: String,
});
const DebugFile = mongoose.model("DebugFile", DebugFileSchema);

module.exports = DebugFile;
