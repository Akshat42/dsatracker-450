type NotesModalProps = {
    heading: string,
    closeHandler : () => void,
    saveHandler : () => void,
}

function NotesModal(props: NotesModalProps) {
  return (
    <main>
      <h3>{props.heading}</h3>
      <textarea />
      <button onClick={props.saveHandler}>Save</button>
      <button onClick={props.closeHandler}>Close</button>
    </main>
  );
}

export default NotesModal;
