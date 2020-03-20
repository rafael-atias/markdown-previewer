import React from 'react';
import ReadDefaultContent from "./readDefaultContent";
import Editor from "./Editor";
import Preview from "./Preview";
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
          <Preview content={this.state.content} />
        </section>
      </article>
    );
  }
}
