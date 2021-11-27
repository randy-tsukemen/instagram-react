import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 
    md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto"
    >
      {/* Section */}
      <section>
        {/* Story */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>

      {/* Section */}
      <section>
        {/* Mini profile */}
        {/* Suggestion */}
      </section>
    </main>
  );
};

export default Feed;
