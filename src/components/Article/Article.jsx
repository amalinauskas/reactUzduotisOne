import React from "react";
import "./Article.css";

const Article = ({ children, title }) => {
  return (
    <article>
      <h1 className="articleTitle">{title}</h1>
      <div className="articleDiv">{children}</div>
    </article>
  );
};

export default Article;
