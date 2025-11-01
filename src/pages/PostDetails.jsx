import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, getUsers, getComments } from "../services/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import CommentsCard from "../components/CommentsCard";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [postData, usersData, commentsData] = await Promise.all([
          getPost(id),
          getUsers(),
          getComments(id),
        ]);
        setPost(postData);
        const user = usersData.find((u) => u.id === postData.userId);
        setAuthor(user);
        setComments(commentsData);
      } catch (err) {
        console.error(err);
        setError("Failed to load post or comments");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-300 mb-4">{post.body}</p>

      {author && (
        <div className="text-sm text-gray-400 mb-6">
          <p>Author: {author.name}</p>
          <p>Email: {author.email}</p>
        </div>
      )}

      <button
        onClick={() => setShowComments((prev) => !prev)}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg mb-4 font-semibold cursor-pointer"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

        {showComments && (<CommentsCard  comments={comments}/>)}
    </div>
  );
}

export default PostDetails