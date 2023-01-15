import { Route, Routes } from "react-router-dom";
import Show from "./Show";
import Users from "./Users";

const RouterUser = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </>
  );
};

export default RouterUser;
