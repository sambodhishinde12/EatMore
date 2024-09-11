import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header"; 
import Body from "./components/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Support from "./components/Support";
import ErrorModel from "./components/ErrorModel";
import Cart from "./components/CartDetails/Cart";
import RestaurantMenu from "./components/Menu/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/support",
        element:<Support/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement : <ErrorModel/>
  },
  
]
)
  

// Render the app to the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRouter} />);