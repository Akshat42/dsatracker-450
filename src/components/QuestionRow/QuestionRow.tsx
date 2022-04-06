import {markQuestionDone, unmarkQuestion} from '../../service/database';
import './QuestionRow.module.css';

type QuestionRowProps = {
  Problem: string;
  id: number;
  URL: string;
  Done: boolean;
  topicId: string;
}


const QuestionRow = (props: QuestionRowProps) => {
  const handleCheckboxChange = async (
      event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const action = event.target.checked;
    if (action === true) {
      await markQuestionDone(props.topicId, props.id - 1);
    } else {
      await unmarkQuestion(props.topicId, props.id-1);
    }
  };
  return (
    <tr key = {props.Problem}>
      <td>
        <input
          type='checkbox'
          defaultChecked = {props.Done}
          onChange={handleCheckboxChange}/>
      </td>
      <td>{props.id}</td>
      <td>
        <a
          href={props.URL}
          target='_blank'
          rel="noopener noreferrer"
        >
          {props.Problem}
        </a>
      </td>
    </tr>
  );
};

export default QuestionRow;
