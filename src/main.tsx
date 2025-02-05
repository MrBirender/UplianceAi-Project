import { createRoot } from "react-dom/client";
import "./index.css";
import "setimmediate";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
