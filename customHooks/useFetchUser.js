import { useEffect } from "react";

const useFetchUser = (setThoughts) => {
  // creating url
  const url = "http://ip-api.com/json";

  // running this fetch request every time url changes
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setThoughts({ ip: data.query, from: `${data.city}, ${data.country}`}));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  return;
};

export default useFetchUser;
