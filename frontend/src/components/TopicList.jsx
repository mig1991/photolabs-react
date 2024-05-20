import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  return (
    <ul className="topic-list">
      {topics.map((topic) => (
        <li key={topic.id} onClick={() => fetchPhotosByTopic(topic.id)}>
          <TopicListItem label={topic.title} />
        </li>
      ))}
    </ul>
  );
};

export default TopicList;
