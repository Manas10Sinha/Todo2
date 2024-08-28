import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./Components/CreatePost.jsx";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./Components/PostList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> }, //loader:()=>{useLoaderData} | useLoaderData=useEffect(POST req)
      { path: "/create-post", element: <CreatePost /> }, //action:()=>{}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
