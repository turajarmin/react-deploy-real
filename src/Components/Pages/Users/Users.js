import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(()=>{
    const fetchPosts=async()=>{
        const data=await fetch("http://localhost:3004/users").catch((err)=>{
            setError(err.message)
            setLoading(true)
        })
        const response=await data.json()
        setUsers(response)
        setLoading(false)
        setError("")
    }
    fetchPosts()
  },[])
  return (
    <>
      <div className="container mt-3 p-2">
        <div className="row m-0">
            {error && <div className="text-warning">{error}</div>}
        </div>
        <div className="row m-0">
            {loading && <div className="text-center"><span className="spinner-border"></span></div>}
        </div>
        <div className="row m-0">
            {users && users.map((item) => {
                return (
                    <User user={item} key={item.id} />
                )
            }) }
        </div>
      </div>
    </>
  );
};

export default Users;
