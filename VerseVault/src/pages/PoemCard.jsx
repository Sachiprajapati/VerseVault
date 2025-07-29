import React, { useState } from 'react';
import './Poems.css';

const PoemCard = ({ poem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="poem-card">
      <div className="poem-card-header">
        <h3 className="poem-title">{poem.title}</h3>
        <span className={`category-badge ${poem.category?.toLowerCase()}`}>
          {poem.category}
        </span>
      </div>

      <div className="poem-content">
        <p className="poem-excerpt">
          {poem.content
            ? isExpanded
              ? poem.content
              : poem.content.slice(0, 120) + '...'
            : "No content"}
        </p>
      </div>

      <div className="poem-card-footer">
        <span className="poem-author">— by {poem.author}</span>
        <div className="poem-actions">
          <button onClick={toggleExpand} className="read-more-btn">
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
          <div className="poem-interactions">
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoemCard;
