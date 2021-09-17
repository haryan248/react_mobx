import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "mobx-react";
import todoStore from "./stores/TodoStore";

ReactDOM.render(
    <React.StrictMode>
        <Provider todoStore={todoStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
