import React from "react";

import marked from "marked";
import * as moment from "moment";

import useStyles from "./styles";

const BlogPost = ({ blogPost }) => {
  const classes = useStyles();

  const { title, publishDate, heroImage, body } = blogPost.fields;

  // using the marked package/function to conditionally render
  // the raw markdown from the Contentful API into html markdown
  const postBody = body ? marked(body) : null;

  // formatting the date using the moment library
  const formattedDate = moment(publishDate).format("MMMM DD YYYY");

  return (
    <div className={classes.blogPostsWrapper}>
      <p>{formattedDate}</p>
      <h2>{title}</h2>
      {heroImage.fields && (
        <img
          className={classes.heroImage}
          src={heroImage.fields.file.url}
          alt={heroImage.fields.description}
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: postBody }} />
    </div>
  );
};

export default BlogPost;
