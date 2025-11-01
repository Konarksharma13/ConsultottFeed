import { useState, useEffect } from "react";
import { getUsers, createPost } from "../services/api";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

const CreatePost = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ title: "", body: "", userId: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (err) {
        console.error(err);
        setError("Failed to load users");
      }
    }
    loadUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.title || !form.body || !form.userId) {
    alert("Please fill all fields");
    return;
  }
  try {
    setLoading(true);
    const newPost = await createPost(form);
    // save in localStorage
    const existing = JSON.parse(localStorage.getItem("newPosts") || "[]");
    localStorage.setItem("newPosts", JSON.stringify([newPost, ...existing]));
    navigate("/posts");
  } catch (err) {
    console.error(err);
    setError("Failed to create post");
  } finally {
    setLoading(false);
  }
};


  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Create New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-1">Body</label>
          <textarea
            name="body"
            rows="4"
            value={form.body}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-1">Author</label>
          <select
            name="userId"
            value={form.userId}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}
export default CreatePost