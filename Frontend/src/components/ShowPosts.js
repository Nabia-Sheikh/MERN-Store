import React from "react";
import { getPosts } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ShowPosts = () => {
  const dispatch = useDispatch();
  const [posts, setposts] = React.useState([]);
  React.useEffect(() => {
    dispatch(getPosts());
  }, []);
  const state = useSelector((state) => state.posts);

  React.useEffect(() => {
    setposts(state.slice(0, 10));
  }, [state]);

  const deletebook = async (id) => {
    const res = await axios.delete(`http://localhost:8080/books/${id}`);
    if (res.status === 200) {
      alert("Book deleted!");
      window.location.reload();
    }
  };

  return (
    <div>
      {posts
        ? posts.map((item) => (
            <>
              <h1>{item.title}</h1>
              <p>{item.author}</p>
              <button
                onClick={() => {
                  deletebook(item._id);
                }}
              >
                Delete
              </button>
              <hr />
            </>
          ))
        : "loading"}
    </div>
  );
};

export default ShowPosts;
