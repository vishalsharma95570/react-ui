import React from "react";
import { ReactComponent as Photo } from "../../assets/photo.svg";
const UploadForm = ({ submitHandler, isUpload }) => {
  const style = isUpload
    ? { width: "40px", height: "30px" }
    : { width: "76px", height: "44px" };

  return (
    <form className="mr-4 mt-2" onSubmit={submitHandler}>
      <div style={{ position: "relative" }}>
        {isUpload && <Photo style={{ width: "30px" }} />}
        {!isUpload && <label className="btn btn-success">Retake</label>}
        <input
          className="input-file"
          onChange={(e) => submitHandler(e.target.files[0])}
          type="file"
          name="uploadFile"
          style={style}
        ></input>
      </div>
    </form>
  );
};
export default UploadForm;
