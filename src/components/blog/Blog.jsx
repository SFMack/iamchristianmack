import React, { useState, useEffect } from "react";

import useStyles from "./styles";
import { client } from "../../client";

import BlogList from "./blogList/BlogList";

const Blog = () => {
  const classes = useStyles();

  const [data, setData] = useState("");

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        // filter response to only store blogPost content types
        // can adjust to retrieve any contentType
        const posts = response.items.filter(
          (post) => post.sys.contentType.sys.id === "blogPost"
        );
        setData(posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={classes.blogWrapper}>
      <BlogList postData={data} />
    </div>
  );
};

export default Blog;
