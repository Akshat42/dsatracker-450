import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {TopicSet} from '../../models/TopicSet';
import {getDataByTopic} from '../../service/database';
import QuestionRow from '../QuestionRow/QuestionRow';
import classes from './QuestionTable.module.css';

type paramType = {
        id: string
}

const QuestionTable: React.FC = () => {
  const {id} = useParams<keyof paramType>() as paramType;
  const [tableData, setTableData] = useState<TopicSet>();
  const [topicNotFound, setTopicNotFound] = useState(true);

  async function retriveTopicDataByid(id:string | undefined) {
    const data = await getDataByTopic(id);
    if (data) {
      setTableData(data);
    } else {
      setTopicNotFound(true);
    }
  }

  useEffect(()=> {
    retriveTopicDataByid(id);
  }, []);

  const tableDataJSX = (<table className={classes.table}>
    <thead>
      <tr>
        <th>Done</th>
        <th>Q-Id</th>
        <th>Question</th>
      </tr>
    </thead>
    <tbody>
      {
        tableData?.questions.map((question, index) => {
          return (
            <QuestionRow
              topicId = {id}
              key={question.Problem}
              Done={question.Done}
              Problem={question.Problem}
              id = {index+1}
              URL = {question.URL} />
          );
        })
      }
    </tbody>
  </table>
  );
  if (tableData) {
    return tableDataJSX;
  } else if (topicNotFound) {
    return <h3>No Such Topic Found!</h3>;
  } else {
    return <p>Loading ...</p>;
  }
};

export default QuestionTable;
