import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostPage from "./pages/PostPage";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";



function App() {

  return (
     <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
