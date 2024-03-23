import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./tailwind.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { UserProvider } from "./components/context/user.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
