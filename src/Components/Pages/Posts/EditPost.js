import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const EditPost = (props) => {
  const navigate = useNavigate();
  const { post } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3004/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: post.id,
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
    navigate("/posts");
  };
  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, []);
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="d-block col-6 offset-3 mb-2">
          <label htmlFor="title" className="text-capitalize mb-2">
            title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="title....!"
            style={{ border: "1px inset lightgrey" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="d-block col-6 offset-3 mb-2">
          <label htmlFor="body" className="text-capitalize mb-2">
            body
          </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="body....!"
            style={{
              border: "1px inset lightgrey",
              height: "150px",
              resize: "none",
            }}
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </div>
        <div className="d-block col-6 offset-3 mb-2">
          <input type="submit" className="btn btn-dark" />
        </div>
      </form>
    </>
  );
};

export default EditPost;
