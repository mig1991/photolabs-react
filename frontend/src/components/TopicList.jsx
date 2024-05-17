import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const topics = ['Nature', 'Technology', 'People', 'Architecture', 'Animals', 'Travel'];

const TopicList = () => {
  return (
    <ul className="topic-list">
      {topics.map((topic, index) => (
        <TopicListItem key={index} label={topic} />
      ))}
    </ul>
  );
};

export default TopicList;
