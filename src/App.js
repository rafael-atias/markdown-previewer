import React from 'react';
import ReadDefaultContent from "./readDefaultContent";
import Marked from "marked";
import DOMPurify from "dompurify";
import Editor from "./Editor";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ReadDefaultContent() || "",
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <article className="App">
        <header>
          <h1>A Markdown Previewer</h1>
        </header>
        <section>
          <Editor
            content={this.state.content}
            changeHandler={this.changeHandler} />
          <div id="preview"
            className="layout"
            dangerouslySetInnerHTML={({ __html: DOMPurify.sanitize(Marked(this.state.content)) })}></div>
        </section>
      </article>
    );
  }
}
