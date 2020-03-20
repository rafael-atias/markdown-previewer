import React from "react";
import Marked from "marked";
import DOMPurify from "dompurify";

export default function Preview(props) {
    return <div id="preview"
        className="layout"
        dangerouslySetInnerHTML={({ __html: DOMPurify.sanitize(Marked(props.content)) })}></div>
}