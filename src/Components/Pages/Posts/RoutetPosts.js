import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";
import Posts from "./Posts";
import Show from "./Show";

const RouterPosts = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Posts/>} />
            <Route path="/:id" element={<Show/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
     );
}
 
export default RouterPosts;