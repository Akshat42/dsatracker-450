import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {TopicSet} from '../../models/TopicSet';
import {getDataByTopic} from '../../service/database';
import QuestionRow from '../QuestionRow/QuestionRow';
import style from './QuestionTable.module.css';

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

  const tableDataJSX = (
    <>
      <div className={style.breadCrumb}>
        <h3>
          <Link to='/'>Topic</Link>
          <span>/{tableData?.topicName}</span>
        </h3>
      </div>
      <div className={style['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Q-Id</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.questions.map((question, index) => {
              return (
                <QuestionRow
                  topicId={id}
                  key={question.Problem}
                  Done={question.Done}
                  Problem={question.Problem}
                  id={index + 1}
                  URL={question.URL} />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
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
