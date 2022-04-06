import {useEffect, useState} from 'react';
import Topic from '../../components/Topic/Topic';
import TopicContainer from '../../components/TopicContainer/TopicContainer';
import CardData from '../../models/CardData';
import {TopicSet} from '../../models/TopicSet';
import {getAllData} from '../../service/database';

const Home: React.FC = () => {
  const [data, setData] = useState<CardData[]>([]);

  function mapCardData(topic: TopicSet): CardData {
    return {
      id: topic.id,
      topicName: topic.topicName,
      started: topic.started,
      totalQuestions: topic.questions.length,
      doneQuestions: topic.doneQuestions,
    };
  }

  async function retriveAllData() {
    const data = await getAllData();
    const cardData = data.map(mapCardData);
    setData(cardData);
  }

  useEffect(() => {
    retriveAllData();
  }, []);

  const generateCards = () => {
    return data.map((card) => {
      return (
        <Topic
          id={card.id}
          key={card.id}
          topicName={card.topicName}
          totalQuestions = {card.totalQuestions}
          questionsDone = {card.doneQuestions} />
      );
    });
  };

  return (
    <>
      <TopicContainer>
        <>
          {generateCards()}
        </>
      </TopicContainer>
    </>
  );
};

export default Home;
