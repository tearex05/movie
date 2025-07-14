import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/movie/">
      <App />
    </HashRouter>
  </React.StrictMode>
);
