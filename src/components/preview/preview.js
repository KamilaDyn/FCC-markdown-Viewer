import React from "react";
import marked from "marked";
import "./preview.scss";

marked.setOptions({ breaks: true });

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text} + '</a>'`;
};

const Preview = props => (
  <div
    className="preview-container"
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(props.content, { renderer: renderer })
    }}
  ></div>
);

export default Preview;
