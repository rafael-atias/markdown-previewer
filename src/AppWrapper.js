import React from "react";
import { Provider } from "react-redux";
import { store, ConnectedComponent } from "./reactReduxConnection";
import App from "./App";

export default class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedComponent />
            </Provider>
        );
    }
}