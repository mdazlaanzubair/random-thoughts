import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/PagesComponents/Navbar";
import Home from "./pages/HomePage/Home";
import ThoughtsContext from "./Context/ThoughtsContext";
import { useEffect, useState } from "react";
import About from "./pages/AboutPage/About";
import Create from "./pages/CreatePage/Create";
import useFetchPosts from "../customHooks/useFetchPosts";
import useFetchUser from "../customHooks/useFetchUser";

const App = () => {
  // thoughts holding array
  const [thoughts, setThoughts] = useState([]);

  // user details
  const [user, setUser] = useState();

  // fetching thoughts data and setting global variable
  useFetchPosts(setThoughts);
  
  // fetching visitor data and setting global variable
  useFetchUser(setUser);

  return (
    <>
      <Navbar />
      <ThoughtsContext.Provider value={{ user, thoughts, setThoughts }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Create" element={<Create />} />
        </Routes>
      </ThoughtsContext.Provider>
    </>
  );
};

export default App;
