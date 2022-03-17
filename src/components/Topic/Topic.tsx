/* eslint-disable max-len */
import classes from './Topic.module.css';

type TopicProps = {
    topicName: string;
    totalQuestions: number;
    questionsDone: number;
}

function Topic(props: TopicProps) {
  return (
    <article className={classes['not-started']}>
      <div className={classes['flex-pill']}>
        <h4 className={`${classes['sub-heading']}`}>{props.topicName}</h4>
        <p className={`${classes['m-t-0']} ${classes['start-now']}`}>Start Now</p>
      </div>
      <p>Total Questions: {props.totalQuestions}</p>
      <p>Not Yet Started</p>
    </article>
  );
}

export default Topic;
