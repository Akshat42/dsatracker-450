import {useContext} from 'react';
import GlobalProgress from '../../components/GlobalProgress/GlobalProgress';
import Topic from '../../components/Topic/Topic';
import TopicContainer from '../../components/TopicContainer/TopicContainer';
import DbContext from '../../store/db-context';

function Home() {
  const db = useContext(DbContext);
  console.log(db);
  return (
    <>
      <GlobalProgress />
      <TopicContainer>
        <>
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
          <Topic topicName = "Array"
            totalQuestions = {36}
            questionsDone = {0}
          />
        </>
      </TopicContainer>
    </>
  );
}

export default Home;
