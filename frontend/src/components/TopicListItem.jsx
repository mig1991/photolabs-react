import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ label }) => {
  return (
    <li className="topic-list__item">
      <span>{label}</span>
    </li>
  );
};

// Use `.defaultProps` when building components in isolation
TopicListItem.defaultProps = {
  label: 'Nature'
};

export default TopicListItem;
