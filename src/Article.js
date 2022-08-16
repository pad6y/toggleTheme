import React from 'react';
import { formatDistance, subDays } from 'date-fns';
const Article = ({ id, title, date, length, snippet }) => {
  const dateFormatted = formatDistance(subDays(new Date(date), 3), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{dateFormatted}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </div>
  );
};

export default Article;
