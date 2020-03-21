import React from "react";
import { Provider } from "react-redux";
import { store, ConnectedComponent as Container } from "./reactReduxConnection";

export default class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}