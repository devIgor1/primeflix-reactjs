import RouterApp from "./routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <RouterApp />
    </div>
  );
}

export default App;
