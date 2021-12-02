import React from "react";
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
  return (
    <div>
      {DUMMY_POSTS.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;