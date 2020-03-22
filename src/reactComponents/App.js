import React from 'react';
import Editor from "./Editor";
import Preview from "./Preview";
import './App.css';
import "./github-gist.css";

export default function App(props) {
  return (
    <article className="App">
      <header>
        <h1>A Markdown Previewer</h1>
      </header>
      <section>
        <Editor
          content={props.content}
          changeHandler={props.changeHandler} />
        <Preview content={props.content} />
      </section>
    </article>
  );
}
