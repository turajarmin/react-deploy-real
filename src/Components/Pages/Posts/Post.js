import { Link } from "react-router-dom";

const Post = (props) => {
  const {post}=props  
  return (
    <>
      <div className="card mx-2 my-2 bg-dark" style={{ width: "18rem" }}>
        <div className="card-header bg-dark text-white">Title:{post.title}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">Title:{post.title}</li>
          <li className="list-group-item bg-dark text-white">Body:{post.body}</li>
          <li>
              <Link className="btn btn-warning mx-2 my-2 text-capitalize" to={`/posts/${post.title}`}>read-more</Link>  
          </li>
          <li>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Post;
