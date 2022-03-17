import {ReactElement} from 'react';
import classes from './TopicContainer.module.css';

type Props = {
        children:ReactElement
}

function TopicContainer(props: Props) {
  return (
    <main className={classes['topic-container']}>
      {props.children}
    </main>
  );
}

export default TopicContainer;
