import {useEffect, useState} from 'react';
import AppProgressBar from '../../components/AppProgressBar/AppProgressBar';
import Topic from '../../components/Topic/Topic';
import TopicContainer from '../../components/TopicContainer/TopicContainer';
import CardData from '../../models/CardData';
import {Stats} from '../../models/Stats';
import {TopicSet} from '../../models/TopicSet';
import {getAllData, getStats} from '../../service/database';
import styles from './Home.module.css';

const TOTAL_QUESTIONS = 448;

const Home: React.FC = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [stats, setStats] = useState<Stats>();

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
    const stats = await getStats();
    const cardData = data.map(mapCardData);
    setStats(stats);
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
      <div className={`${styles.normalWeight} ${styles.center}`}>
        <h2>Your Gateway to crack DSA</h2>
        {
        stats?.totalDoneQuestions ?
        <>
          <h3>
            {
              `Total Questions Solved: 
              ${stats.totalDoneQuestions}
            (${
                ((stats.totalDoneQuestions / TOTAL_QUESTIONS) * 100).toFixed(2)
              }%)`
            }
          </h3><AppProgressBar
            donePercent={
              Number(
                  ((stats.totalDoneQuestions / TOTAL_QUESTIONS) * 100)
                      .toFixed(2),
              )
            }/>
        </> :
          <h3>Start Solving</h3>
        }
      </div>
      <TopicContainer>
        <>
          {generateCards()}
        </>
      </TopicContainer>
    </>
  );
};

export default Home;
