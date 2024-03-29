import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//redux
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

//styles
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
