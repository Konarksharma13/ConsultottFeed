import { v4 as uuidv4 } from "uuid";

const CommentsCard = ({comments}) => {
  return (
    <div>
        {comments.map((c) => (
            <div key={uuidv4()} className="bg-gray-700 p-3 rounded-lg mb-5">
            <p className="text-sm font-semibold text-yellow-400">
                {c.name}{" "}
                <span className="text-gray-400 text-xs">({c.email})</span>
            </p>
            <p className="text-gray-300 text-sm mt-1">{c.body}</p>
            </div>
        ))}
    </div>
  )
}

export default CommentsCard
