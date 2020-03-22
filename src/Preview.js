import React from "react";
import Marked from "marked";
import DOMPurify from "dompurify";
import highlightJs from "highlight.js";

Marked.setOptions({
    langPrefix: "language-",
    silent: true,
    highlight: (function (module) {
        return function (code, language) {
            return module.highlightAuto(
                code,
                [module.getLanguage(language) ? language : "plaintext"]
            ).value;
        };
    })(highlightJs),
});

export default function Preview(props) {
    return <div id="preview"
        className="layout"
        dangerouslySetInnerHTML={({ __html: DOMPurify.sanitize(Marked(props.content)) })}></div>
}