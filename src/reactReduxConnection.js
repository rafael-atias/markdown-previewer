import App from "./App";
import React from "react";
import { createStore, connect } from "redux";

export const WRITE = "WRITE";

export const writeMarkdown = function (text) {
    return {
        type: WRITE,
        text,
    }
};

export const mdReducer = function (state = "", action) {
    const possibleActions = {
        WRITE: function () {
            return `${state}${action.text}`;
        }
    };

    return possibleActions[action] ? possibleActions[action] : state;
};

export const store = createStore(mdReducer);

export const mapStateToProps = function (state) {
    return {
        text: state,
    }
};

export const mapDispatchToProps = function (dispatch) {
    return {
        addNewContent: function (text) {
            dispatch(writeMarkdown(text));
        },
    };
};

class Presentational extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <App />
        );
    }
}

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);