import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ThoughtsContext from "./Context/ThoughtsContext";
import { useState } from "react";

const App = () => {
  // thoughts holding array
  const [thoughts, setThoughts] = useState([
    {
      user: "39.34.143.14",
      title: "Flexbox",
      desc: "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
      likes: [
        {
          user: "39.34.143.14",
          isLiked: true,
        },
        {
          user: "39.34.143.15",
          isLiked: false,
        },
      ],
      location: "Karachi, Pakistan",
      dated: "today",
      isDeleted: false,
    },
    {
      user: "39.34.143.14",
      title: "Flexbox",
      desc: "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
      likes: [
        {
          user: "39.34.143.14",
          isLiked: true,
        },
        {
          user: "39.34.143.15",
          isLiked: false,
        },
      ],
      location: "Karachi, Pakistan",
      dated: "today",
      isDeleted: false,
    },
    {
      user: "39.34.143.14",
      title: "Flexbox",
      desc: "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
      likes: [
        {
          user: "39.34.143.14",
          isLiked: true,
        },
        {
          user: "39.34.143.15",
          isLiked: false,
        },
      ],
      location: "Karachi, Pakistan",
      dated: "today",
      isDeleted: false,
    },
  ]);

  // user details
  const [user, setUser] = useState({
    country_code: "PK",
    country_name: "Pakistan",
    city: "Karachi",
    postal: "12311",
    latitude: 24.9056,
    longitude: 67.0822,
    IPv4: "111.88.125.169",
    state: "Sindh",
  });

  return (
    <>
      <Navbar />
      <ThoughtsContext.Provider
        value={{ user, thoughts, setThoughts }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </ThoughtsContext.Provider>
    </>
  );
};

export default App;
