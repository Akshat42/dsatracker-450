import {Dispatch, SetStateAction, useState} from 'react';
import {
  markQuestionDone,
  saveNotesToDb,
  unmarkQuestion,
} from '../../service/database';
import notesIcon from '../../assets/icons/notes_icon.svg';
import './QuestionRow.css';
import Modal from '../../modals/Modal';
import NotesModal from '../../modals/NotesModal';
import {Link} from 'react-router-dom';

type QuestionRowProps = {
  notes: string;
  Problem: string;
  id: number;
  URL: string;
  Done: boolean;
  topicId: string;
  setDoneQuestions: Dispatch<SetStateAction<number>>
}


const QuestionRow = (props: QuestionRowProps) => {
  const [isDone, setIsDone] = useState(props.Done);
  const [showModal, setShowModal] = useState(false);
  const [notesState, setNotesState] = useState(props.notes);

  const handleCheckboxChange = async (
      event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const action = event.target.checked;
    if (action === true) {
      await markQuestionDone(props.topicId, props.id - 1);
      setIsDone(true);
      props.setDoneQuestions((prev) => prev! + 1);
    } else {
      await unmarkQuestion(props.topicId, props.id-1);
      setIsDone(false);
      props.setDoneQuestions((prev) => prev! - 1);
    }
  };

  const handleModalVisibility = () => {
    setShowModal((prev) => !prev);
  };

  function closeHandler() {
    setShowModal(false);
  }

  async function saveHandler(notes: string | undefined) {
    if (notes !== undefined) {
      await saveNotesToDb(props.topicId, props.id - 1, notes);
      setNotesState(notes);
      setShowModal(false);
    }
  }
  return (
    <>
      {showModal && <Modal >
        <NotesModal
          notes={notesState}
          heading = {props.Problem}
          closeHandler = {closeHandler}
          saveHandler = {saveHandler}
        />
      </Modal>}
      <tr key = {props.Problem} className = {isDone ? 'green' : ''}>
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
          <Link to='' onClick={handleModalVisibility}>
            <img
              src={notesIcon}
              alt="take a note"
              className={notesState ? 'notes-icon hasNotes' : 'notes-icon'}/>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default QuestionRow;
