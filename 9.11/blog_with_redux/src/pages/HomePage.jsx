import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {

const posts = useSelector((state) => state.posts)

  return (
    <ul className="flex flex-col gap-y-2">
      {posts.map((post) => (
        <li key={post.id}>
					<Link to={`/posts/${post.id}`}>{post.title}</Link>
				</li>
      ))}
    </ul>
  );
}

export default HomePage;
