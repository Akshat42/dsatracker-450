import {useRef} from 'react';
import styles from './NotesModal.module.css';

type NotesModalProps = {
    heading: string,
    notes: string,
    closeHandler : () => void,
    saveHandler : (notes: string) => void,
}

function NotesModal(props: NotesModalProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  function handleSave() {
    const notes = textAreaRef.current?.value;
    if (notes !== undefined) {
      props.saveHandler(notes);
    }
  }
  return (
    <main className={styles.notes_modal}>
      <h3>{props.heading}</h3>
      <textarea ref={textAreaRef} defaultValue={props.notes}/>
      <div>
        <button
          onClick={handleSave}>
          Save
        </button>
        <button onClick={props.closeHandler}>Close</button>
      </div>
    </main>
  );
}

export default NotesModal;
