import { useEffect } from "react";

const useFetchPosts = (setThoughts) => {
  // creating url
  const url = "http://127.0.0.1:3000/index";

  // running this fetch request every time url changes
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setThoughts(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  return;
};

export default useFetchPosts;
