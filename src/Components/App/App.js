import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";
import Posts from "../Pages/Posts/Posts";
import RouterPosts from "../Pages/Posts/RoutetPosts";
import RouterUser from "../Pages/Users/RouterUser";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<RouterUser />} />
          <Route path="/posts/*" element={<RouterPosts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
