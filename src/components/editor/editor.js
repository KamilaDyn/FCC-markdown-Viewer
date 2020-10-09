import React from "react";
import "./editor.scss";

const Edit = props => (
  <div className="editor-container">
    <h2 className="editor-container__title">Editor</h2>
    <textarea
      name=""
      onChange={props.onChange}
      defaultValue={props.content}
      id="editor"
      cols="30"
      rows="30"
      type
      text
    />
  </div>
);
export default Edit;
