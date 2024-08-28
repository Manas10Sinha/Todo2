import "./App.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";

import PostListProvider from "../Store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          <div className="createpostContainer">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
