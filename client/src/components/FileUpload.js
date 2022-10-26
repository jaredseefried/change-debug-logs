import React, { useState } from "react";
import axios from "axios";
import API from "../utils/API";

function FileUpload(props) {
  const [file, setFile] = useState({ fileName: "" });
  const [response, setResponse] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFile({ ...file, [name]: value });
  };

  function handleSubmit(event) {
    // event.preventDefault();
    API.saveDebugFile(file).then((response) => {
      setFile({ fileName: "" });
    });
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
    </div>
  );
}

export default FileUpload;
