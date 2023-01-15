import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./create.css";
import EditPost from "./EditPost";
const Edit = () => {
  const {id} = useParams()
  const [post,setPost]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")
  useEffect(()=>{
    const fetchPost=async()=>{
        let data=await fetch(`http://localhost:3004/posts/${id}`).catch((err)=>{
           setError(err.message) 
           setLoading(true)
        })
        const response=await data.json()
        setPost(response)
        setLoading(false)
        setError("")
    }
    fetchPost()
  },[])
  return (
    <>
      <div className="container mx-auto mt-2">
        <div className="text-center">{loading && <span className="spinner-border spinner-border-sm text-warning"></span>}</div>
        <div className="text-center">
            {error && <span className="text-warning"> ${error} </span>}
        </div>
        <div className="container p-5 mt-2 text-white">
            {post && <EditPost post={post} />}
        </div>
      </div>
    </>
  );
};

export default Edit;
