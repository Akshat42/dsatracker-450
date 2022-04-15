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
      <h3 className={styles.title}>{props.heading}</h3>
      <textarea
        ref={textAreaRef}
        defaultValue={props.notes}
        className={styles.textarea}/>
      <div className={styles.button_flex}>
        <button
          className={styles.save + ' ' + styles.button}
          onClick={handleSave}>
          Save
        </button>
        <button
          className={styles.close + ' ' + styles.button}
          onClick={props.closeHandler}>
          Close
        </button>
      </div>
    </main>
  );
}

export default NotesModal;
