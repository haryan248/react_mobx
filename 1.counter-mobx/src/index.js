import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "mobx-react";
// mobx와 store를 연결해주는 provider
import CounterStore from "./store/CounterStore";

ReactDOM.render(
    <React.StrictMode>
        <Provider counterStore={CounterStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
