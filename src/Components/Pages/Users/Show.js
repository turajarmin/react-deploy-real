import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const {id}=useParams()
  const [user,setUser]=useState(null)
  useEffect(()=>{
    const fetchUser=async()=>{
        const data=await fetch('http://localhost:3004/users')
        const response=await data.json()
        const user=response.find(item => {
            return item.name===id 
        })
        setUser(user)
    }
    fetchUser()
  })  
  return (
    <>
      {user && <div className="card mx-2 my-2 bg-dark" style={{ width: "18rem" }}>
        <div className="card-header bg-dark text-white">
          Featured:{user.name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">
            Email:{user.email}
          </li>
          <li className="list-group-item bg-dark text-white">
            Phone:{user.phone}
          </li>
          <li className="list-group-item bg-dark text-white">
            UserName:{user.username} 
          </li>
        </ul>
      </div>    }
    </>
  );
};

export default Show;
