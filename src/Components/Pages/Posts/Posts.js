import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("http://localhost:3004/posts").catch((err) => {
        setError(err.message);
        setLoading(true);
      });
      const response = await data.json();
      setPosts(response);
      setLoading(false);
      setError("");
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="container mt-2">
        <div className="row m-0">
          {loading && (
            <div className="text-center">
              <span className="spinner-border"></span>
            </div>
          )}
        </div>
        <div className="row m-0">
          {error && (
            <div className="text-center">
                 
              <span className="text-warning">{error}</span>
            </div>
          )}
        </div>
        <div className="row mt-1 mb-1">
            <Link className="btn btn-dark text-text-capitalize d-inline-block" style={{width:"150px"}} to="/posts/create">create</Link>
        </div>
        <div className="row m-0">
          {posts &&
            posts.map((item) => {
              return <Post post={item} key={item.id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Posts;
