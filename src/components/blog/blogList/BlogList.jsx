import React from "react";

import BlogPost from "../blogPost/BlogPost";

import useStyles from "./styles";

const BlogList = ({ postData }) => {
  const classes = useStyles();

  return (
    <div className={classes.blogListWrapper}>
      {postData &&
        postData.map((blogPost, index) => (
          <BlogPost key={index} blogPost={blogPost} />
        ))}
    </div>
  );
};

export default BlogList;
