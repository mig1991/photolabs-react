import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const topics = ['Nature', 'Technology', 'People', 'Architecture', 'Animals', 'Travel'];

const TopicList = ({ topics }) => {
  return (
    <ul className="topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} />
      ))}
    </ul>
  );
};


export default TopicList;
