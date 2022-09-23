import { useContext } from "react";
import ThoughtsContext from "../../../Context/ThoughtsContext";
import PostCard from "./post_components/PostCard";
import Masonry from "react-masonry-css";

const Post = () => {
  const { user, thoughts, setThoughts } = useContext(ThoughtsContext);

  const reversedThoughts = [...thoughts].reverse();

  // masonry responsive grid cols
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      spacing={1}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {reversedThoughts.map((thought, index) => (
        <PostCard key={index} thought={thought} user={user} thoughts={thoughts} setThoughts={setThoughts} />
      ))}
    </Masonry>
  );
};

export default Post;
