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
    setStats(await getStats());
    setData((await getAllData()).map(mapCardData));
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

  function getCompletionValue(doneQuestions: number, totalQuestions: number) {
    return Number(((doneQuestions / totalQuestions) * 100).toFixed(2));
  }

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
                getCompletionValue(stats.totalDoneQuestions, TOTAL_QUESTIONS)
              }%)`
            }
          </h3><AppProgressBar
            donePercent={
              getCompletionValue(stats.totalDoneQuestions, TOTAL_QUESTIONS)
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
