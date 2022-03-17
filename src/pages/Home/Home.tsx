import GlobalProgress from '../../components/GlobalProgress/GlobalProgress';
import TopicContainer from '../../components/TopicContainer/TopicContainer';

function Home() {
  return (
    <>
      <GlobalProgress />
      <TopicContainer>
        <p>Topics goes here</p>
      </TopicContainer>
    </>
  );
}

export default Home;
