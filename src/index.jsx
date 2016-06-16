import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxPromise from "redux-promise";
import APP from "./components/app";
import reducers from "./reducers/index";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <APP />
    </Provider>, document.querySelector('.container')
);

