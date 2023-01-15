import { useNavigate, useParams } from "react-router-dom";

const Delete = (props) => {
  const {id}  = props 
  const navigate = useNavigate();
  const clickDelete = () => {
    fetch(`http://localhost:3004/posts/${id}`, {
      method: "DELETE",
    });
    navigate("/posts");
  };
  return (
    <>
      <button
        onClick={clickDelete}
        className="btn btn-danger mx-2 my-2 text-capitalize"
      >
        delete
      </button>
    </>
  );
};

export default Delete;
