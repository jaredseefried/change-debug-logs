import axios from "axios";

export default {
  // Gets all Example data
  getDebugFiles: function () {
    return axios.get("/api/debugFile");
  },
  // Gets the Example with the given id
  getDebugFile: function (id) {
    return axios.get("/api/debugFile/" + id);
  },
  getDebugFilesByName: function (data) {
    return axios.get("/api/debugFile/name/" + data);
  },
  // Deletes the Example with the given id
  deleteDebugFile: function (id) {
    return axios.delete("/api/debugFile/" + id);
  },
  // Updated example data
  updateDebugFile: function (id, data) {
    return axios.put("/api/debugFile/" + id, data);
  },
  // Saves a Example to the database
  saveDebugFile: function (data) {
    return axios.post("/api/debugFile", data);
  },
};
