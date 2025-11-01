
const PostCard = ({post,getAuthorName}) => {

    return (
        <div className="bg-gray-800 h-56 rounded-xl p-4 hover:bg-gray-700 relative">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-3">
                {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
            </p>
            <p className="text-xs text-gray-500 absolute bottom-5">
                Author: {getAuthorName(post.userId)}
            </p>
        </div>
    )
}

export default PostCard
