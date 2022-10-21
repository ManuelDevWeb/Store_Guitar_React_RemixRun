// Components
import Post from "./post";

const ListadoPosts = ({ posts }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {
          // Iterando sobre los posts
          posts.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))
        }
      </div>
    </>
  );
};

export default ListadoPosts;
