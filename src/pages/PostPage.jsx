import { useState, useEffect } from "react";
import { getPosts, getUsers } from "../services/api";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import PostCard from "../components/PostCard";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const postsPerPage = 10;
  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);



  useEffect(() => {
    async function fetchData() {
      try {
        const [postsRes, usersRes] = await Promise.all([getPosts(), getUsers()]);
        const savedPosts = JSON.parse(localStorage.getItem("newPosts") || "[]");
        setPosts([...savedPosts, ...postsRes]);
        setUsers(usersRes);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const getAuthorName = (userId) => {
      const user = users.find((u) => u.id === userId);
      return user ? user.name : "Unknown";
  };
  
  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <>
      {/*  SearchBar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
        className="w-1/2 bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
      </div>

      {/*  Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
        {currentPosts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <PostCard post={post} getAuthorName={getAuthorName} />
          </Link>    
        ))}

      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500"
          }`}>
          Prev
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500"
          }`}>
          Next
        </button>
      </div>
    </>
     
  );
}

export default PostPage

