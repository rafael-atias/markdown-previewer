import React from "react";
import App from "../reactComponents/App";
import ReadDefaultContent from "../reactComponents/readDefaultContent";

/**
 * A presentational React component that
 * - wraps the App component
 * - handles the state of the UI
 * 
 * @class Presentational
 */
export default class Presentational extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ReadDefaultContent() || "",
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({
            content: event.target.value,
        });
    }

    render() {
        return (
            <App
                changeHandler={this.changeHandler}
                content={this.state.content} />
        );
    }
}