import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ label }) => {
  return (
    <li className="topic-list__item">
      <span>{label}</span>
    </li>
  );
};


export default TopicListItem;
