import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Import createStore from redux
import { createStore, applyMiddleware } from 'redux';

//Import reducer to create store
import { reducer } from './reducers/reducers';

//Import Provider
import { Provider } from 'react-redux';

//Import Redux Thunk
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
