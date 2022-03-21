import GlobalProgress from '../../components/GlobalProgress/GlobalProgress';
import Topic from '../../components/Topic/Topic';
import TopicContainer from '../../components/TopicContainer/TopicContainer';
import {TopicSet} from '../../models/TopicSet';

type homeProps = {
  topics: TopicSet[]
}

const Home: React.FC<homeProps> = (props) => {
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
};

export default Home;
