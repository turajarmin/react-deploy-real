import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Delete from "./Delete";

const Show = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      const data = await fetch("http://localhost:3004/posts");
      const response = await data.json();
      const post = response.find((item) => {
        return item.title === id;
      });
      setPost(post);
    };
    fetchPost();
  }, []);
  return (
    <>
      {post && (
        <div className="card mx-2 my-2 bg-dark" style={{ width: "18rem" }}>
          <div className="card-header bg-dark text-white">
            Title:{post.title}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-white">
              Title:{post.title}
            </li>
            <li className="list-group-item bg-dark text-white">
              Body:{post.body}
            </li>
            <li>
              <Link
                className="btn btn-warning mx-2 my-2 text-capitalize"
                to="/posts"
              >
                come-back
              </Link>
            </li>
            <li>
              <Link className="btn btn-warning p-2 mx-2 text-capitalize my-2" to={`/posts/edit/${post.id}`}>
                edit
              </Link>
              <Delete id={post.id} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Show;
