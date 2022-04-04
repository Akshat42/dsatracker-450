type QuestionRowProps = {
  Problem: string;
  id: number;
  URL: string;
  Done: boolean;
}


const QuestionRow = (props: QuestionRowProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const action = event.target.checked;
    if (action) {
      //  markQuestionDone();
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
