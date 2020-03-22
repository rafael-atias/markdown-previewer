import App from "./App";
import React from "react";
import { createStore } from "redux";
import { connect } from "react-redux";
import ReadDefaultContent from "./readDefaultContent";

const WRITE = "WRITE";

const writeMarkdown = function (text) {
    return {
        type: WRITE,
        text,
    }
};

const mdReducer = function (state = "", action) {
    const possibleActions = {
        WRITE: function () {
            return `${state}${action.text}`;
        }
    };

    return possibleActions[action] ? possibleActions[action] : state;
};

export const store = createStore(mdReducer);

const mapStateToProps = function (state) {
    return {
        text: state,
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        addNewContent: function (text) {
            dispatch(writeMarkdown(text));
        },
    };
};

class Presentational extends React.Component {
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

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);