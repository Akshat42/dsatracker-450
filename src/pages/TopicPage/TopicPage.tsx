import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getDataByTopic} from '../../service/database';

type paramType = {
  id: string
}
const TopicPage: React.FC = () => {
  const {id} = useParams<paramType>();
  console.log();
  useEffect(()=> {
    getDataByTopic(id);
  });
  return <table>
    <thead>
      <td>Done?</td>
      <td>Q-Id</td>
      <td>Questions</td>
    </thead>
  </table>;
};

export default TopicPage;
