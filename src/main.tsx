import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Films from "./Pages/Films/Films.tsx";
import People from "./Pages/People/People.tsx";
import Planets from "./Pages/Planets/Planets.tsx";
import Starship from "./Pages/Starships/Starship.tsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Films",
    element:<Films/> 
  },
  {
    path:"/People",
    element:<People/>
  },
  {
    path:"/Planets",
    element:<Planets/>
  },
  {
    path:"Starships",
    element:<Starship/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
