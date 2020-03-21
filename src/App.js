import React from 'react';
import Editor from "./Editor";
import Preview from "./Preview";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.props.changeHandler(event);
  }

  render() {
    return (
      <article className="App">
        <header>
          <h1>A Markdown Previewer</h1>
        </header>
        <section>
          <Editor
            content={this.props.content}
            changeHandler={this.changeHandler} />
          <Preview content={this.props.content} />
        </section>
      </article>
    );
  }
}
