// TODO: the textarea and the preview are should have different states

import React from 'react';
import Marked from "marked";
import DOMPurify from "dompurify";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    //this.previewer = this.previewer.bind(this);
  }

  keyHandler(event) {
    if (event.key.toLowerCase() === "enter") {
      this.setState(function (state) {
        return {
          content: `${state.content}\n`,
        }
      });
    } else {
      this.changeHandler(event);
    }
  }

  changeHandler(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    const html = DOMPurify.sanitize(Marked(this.state.content));

    return (
      <article className="App">
        <header>
          <h1>A Markdown Previewer</h1>
        </header>
        <section>
          <textarea id="editor" className="layout" value={this.state.content} onChange={this.changeHandler}></textarea>
          <div id="preview" className="layout">{html}</div>
        </section>
      </article >
    );
  }
}
