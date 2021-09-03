import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { bankingreducer } from "./reducers/bankingreducers";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/combineReducer";
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
