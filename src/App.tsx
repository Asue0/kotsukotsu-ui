/** style */
import "./styles/main.scss";

import { RouterProvider } from "react-router-dom";
import CustomRouter from "@routes/CustomRoute";

function App() {
  return <RouterProvider router={CustomRouter} />;
}

export default App;
