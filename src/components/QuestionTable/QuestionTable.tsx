import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Question, TopicSet} from '../../models/TopicSet';
import {getDataByTopic} from '../../service/database';
import QuestionRow from '../QuestionRow/QuestionRow';
import SearchBar from '../SearchBar/SearchBar';
import SearchBarStatsContainer
  from '../SearchBarStatsContainer/SearchBarStatsContainer';
import style from './QuestionTable.module.css';

type paramType = {
        id: string
}

const QuestionTable: React.FC = () => {
  const {id} = useParams<keyof paramType>() as paramType;
  const [tableData, setTableData] = useState<TopicSet>({
    id: '',
    topicName: '',
    started: false,
    position: 0,
    doneQuestions: 0,
    questions: [],
  });
  const [tableRowData, setTableRowData] = useState<Question[]>([]);
  const [topicNotFound, setTopicNotFound] = useState(true);
  const [doneQustions, setDoneQuestions] = useState(tableData.doneQuestions);

  useEffect(()=> {
    retriveTopicDataByid(id);
  }, []);

  async function retriveTopicDataByid(id:string) {
    const data = await getDataByTopic(id);
    if (data) {
      setTableData(data);
      setTableRowData(data.questions);
      setDoneQuestions(data.doneQuestions);
    } else {
      setTopicNotFound(true);
    }
  }

  function handleSearch(key: string) {
    if (tableData) {
      const searchResult =
      tableData.questions.filter(
          (question) => question.Problem.toLowerCase().match(key),
      );
      setTableRowData(searchResult);
    }
  }

  function pickRandomHandler() {
    const question = getRandomQuestionByTopic(tableRowData);
    const win = window.open(question.URL, '_blank');
    win?.focus();
  }

  function getRandomQuestionByTopic(tableRowData: Question[]): Question {
    return tableRowData[Math.floor(Math.random() * tableRowData.length)];
  }

  const tableDataJSX = (
    <>
      <div className={style.breadCrumb}>
        <h3>
          <Link to='/'>Topic</Link>
          <span>/{tableData?.topicName}</span>
        </h3>
      </div>
      <SearchBarStatsContainer>
        <li className={style.flex_1}>
          <button
            className={style.random_button}
            onClick={pickRandomHandler}>Pick Random
          </button>
        </li>
        <li className={style.flex_2}>
          <SearchBar searchHandler={handleSearch} />
        </li>
        <li className={style.flex_3}>
          <span>
            {`${doneQustions}/${tableData?.questions.length}`}
          </span>
        </li>
      </SearchBarStatsContainer>
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
                  setDoneQuestions = {setDoneQuestions}
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
