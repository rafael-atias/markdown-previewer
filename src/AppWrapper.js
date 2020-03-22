import React from "react";
import { Provider } from "react-redux";
import { store } from "./reactRedux/reduxStore";
import { ConnectedComponent as Container } from "./reactRedux/ConnectedComponent";

export default class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}