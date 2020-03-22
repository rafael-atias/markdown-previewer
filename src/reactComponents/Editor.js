import React from "react";

export default function Editor(props) {
    return <textarea
        id="editor"
        className="layout"
        value={props.content}
        onChange={props.changeHandler}></textarea>
}