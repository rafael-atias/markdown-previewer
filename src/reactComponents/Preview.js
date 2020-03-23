import React from "react";
import Marked from "marked";
import DOMPurify from "dompurify";
import highlightJs from "highlight.js";

/**
 * Object -> (String -> String)
 * 
 * consumes a sanitizer, configures it and returns a function that
 * will consume the input to sanitize
 * 
 * @param {Object} sanitizer The sanitizer object
 * @returns {(Function} The sanitizer function
 */
const inputSanitizerFactory = function (sanitizer) {
    /**
     * to prevent tab nabbing
     * 
     * @see https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing
     */
    sanitizer.addHook("afterSanitizeAttributes", function (htmlNode) {
        if (htmlNode.nodeName.toLowerCase() === "a") {
            htmlNode.setAttribute("target", "_blank"); // to avoid the user loses its work if clicks on by accident
            htmlNode.setAttribute("rel", "noopener noreferrer");
        }
    });

    return function (input) {
        return sanitizer.sanitize(input);
    };
};

/**
 * Object -> (String -> String)
 * 
 * Consumes a Markdown parser object, configures it 
 * and returns a function that will consume the input
 * to be parsed
 * 
 * @param {Object} mdParser 
 * @returns {Function} The parser function
 */
const configuredMarkdownParserFactory = function (mdParser) {
    mdParser.setOptions({
        langPrefix: "language-",
        // makes Marked.JS to hide Exceptions
        silent: true,

        // makes Marked.JS to support Github-flavored Markdown
        gfm: true,

        // uses <br /> tags on a single-line breaks
        breaks: true,

        // highlighting code block function
        highlight: (function (module) {
            return function (code, language) {
                return module.highlightAuto(
                    code,
                    [module.getLanguage(language) ? language : "plaintext"]
                ).value;
            };
        })(highlightJs),
    });

    return function (input) {
        return mdParser(input);
    };
};

const inputSanitizer = inputSanitizerFactory(DOMPurify);

const configuredMdParser = configuredMarkdownParserFactory(Marked);

export default function Preview(props) {
    return <div id="preview"
        className="layout"
        dangerouslySetInnerHTML={({ __html: inputSanitizer(configuredMdParser(props.content)) })}></div>
}