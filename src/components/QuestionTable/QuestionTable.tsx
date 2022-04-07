import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Question, TopicSet} from '../../models/TopicSet';
import {getDataByTopic} from '../../service/database';
import QuestionRow from '../QuestionRow/QuestionRow';
import style from './QuestionTable.module.css';

type paramType = {
        id: string
}

const QuestionTable: React.FC = () => {
  const {id} = useParams<keyof paramType>() as paramType;
  const [tableData, setTableData] = useState<TopicSet>();
  const [tableRowData, setTableRowData] = useState<Question[]>();
  const [topicNotFound, setTopicNotFound] = useState(true);

  async function retriveTopicDataByid(id:string | undefined) {
    const data = await getDataByTopic(id);
    if (data) {
      setTableData(data);
      setTableRowData(data.questions);
    } else {
      setTopicNotFound(true);
    }
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const key = event.target.value;
    const searchResult =
    tableData?.questions?.filter((question) => question.Problem.match(key));
    setTableRowData(searchResult);
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
      <nav>
        <button>Pick Random</button>
        <input type='text'
          placeholder="Search Question..."
          onChange={handleSearch}/>
        <span>0/10 Done</span>
      </nav>
      <div className={style['table-container']}>
        <table className={style.tableWidth}>
          <thead>
            <tr>
              <th></th>
              <th>Q-Id</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>
            {tableRowData?.map((question, index) => {
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
