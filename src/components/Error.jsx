export default function Error({ message }) {
  return (
    <div className="text-center text-red-400 py-10">
      <p>{message || "Something went wrong"}</p>
    </div>
  );
}
