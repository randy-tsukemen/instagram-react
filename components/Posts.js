import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const DUMMY_POSTS = [
  {
    id: 1,
    username: "minori",
    userImg:
      "https://pbs.twimg.com/media/FE7rDo6VUAQQqFF?format=jpg&name=large",
    img: "https://pbs.twimg.com/media/FFL7QlSVEAwexSt?format=jpg&name=medium",
    caption: "Post 1",
  },
  {
    id: 2,
    username: "minori",
    userImg:
      "https://pbs.twimg.com/media/FE7rDo6VUAQQqFF?format=jpg&name=large",
    img: "https://pbs.twimg.com/media/FFL7QlSVEAwexSt?format=jpg&name=medium",
    caption: "Post 2",
  },
  {
    id: 3,
    username: "minori",
    userImg:
      "https://pbs.twimg.com/media/FE7rDo6VUAQQqFF?format=jpg&name=large",
    img: "https://pbs.twimg.com/media/FFL7QlSVEAwexSt?format=jpg&name=medium",
    caption: "Post 3",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
