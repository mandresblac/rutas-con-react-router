import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const loaderPost = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!response.ok) throw ({
    status: response.status,
    statusText: 'No encontrado',
  });

  const post = await response.json();
  return { post };
};
