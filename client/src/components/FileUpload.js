import React, { useState } from "react";
import axios from "axios";
import API from "../utils/API";

function FileUpload() {
  const [file, setFile] = useState({ fileName: "" });
  const [response, setResponse] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFile({ ...file, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    API.saveDebugFile(file).then((response) => {
      setFile({ fileName: "" });
      console.log("uploaded")
    });
  }

  function onClickMe(event) {
    event.preventDefault()
    API.getDebugFiles().then((response) => {
      const array = response.data
      if (array.length === 0) {
        console.log("Nothing in the array")
      } else {
        console.log(array)
      }
    })
  }

  function deleteLog(event) {
    event.preventDefault()
    API.getDebugFiles().then((response) => {
      const array = response.data
      const arrayId = array[0]._id
      if (array.length === 0) {
        console.log("Nothing in the array")
      } else {
        console.log("Deleted")
        API.deleteDebugFile(arrayId).then((response) => {
        })
      }
    })

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input
          className="upload-log"
          type="file"
          name="fileName"
          value={file.fileName}
          onChange={handleInputChange}
        />
        <button type="submit">Upload</button>

      </form>
      <button type="button" onClick={onClickMe}>Click Me!</button>
      <button type="button" onClick={deleteLog}>Delete Me!</button>
    </div>
  );
}

export default FileUpload;
