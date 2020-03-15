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
          <textarea
            id="editor"
            className="layout"
            value={this.state.content}
            onChange={this.changeHandler}></textarea>
          <div id="preview"
            className="layout"
            dangerouslySetInnerHTML={({ __html: DOMPurify.sanitize(Marked(this.state.content)) })}></div>
        </section>
      </article>
    );
  }
}
