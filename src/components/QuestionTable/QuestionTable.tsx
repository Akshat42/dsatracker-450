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
  const {id} = useParams<paramType>();
  const [tableData, setTableData] = useState<TopicSet>();

  async function retriveTopicDataByid(id:string | undefined) {
    const data = await getDataByTopic(id);
    setTableData(data);
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
          console.log(question);
          return (
            <QuestionRow
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
  } else {
    return <p>Loading ...</p>;
  }
};

export default QuestionTable;
