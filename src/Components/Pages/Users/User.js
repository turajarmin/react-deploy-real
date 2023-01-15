import { Link } from "react-router-dom";

const User = (props) => {
  const {user}=props  
  return (
    <>
      <div className="card mx-2 my-2 bg-dark" style={{ width: "18rem" }}>
        <div className="card-header bg-dark text-white">Featured:<Link to={`/users/${user.name}`}>{user.name}</Link></div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">Email:{user.email}</li>
          <li className="list-group-item bg-dark text-white">Phone:{user.phone}</li>
          <li className="list-group-item bg-dark text-white">UserName:{user.useranem}</li>
        </ul>
      </div>
    </>
  );
};

export default User;
