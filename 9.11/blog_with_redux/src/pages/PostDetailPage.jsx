import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PostDetailPage() {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === Number(postId))
  );
  const { title, body } = post;

  return (
    <article>
      <h1 className="text-4xl font-bold">{title}</h1>

      <section className="mt-10">
        <p>{body}</p>
      </section>
    </article>
  );
}

export default PostDetailPage;
