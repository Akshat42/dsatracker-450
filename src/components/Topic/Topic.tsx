
import {Link} from 'react-router-dom';
import classes from './Topic.module.css';

type TopicProps = {
    id: string;
    topicName: string;
    totalQuestions: number;
    questionsDone: number;
}

function Topic(props: TopicProps) {
  return (
    <Link to={props.id}>
      <article className={classes['not-started']}>
        <div className={classes['flex-pill']}>
          <h4 className={`${classes['sub-heading']}`}>{props.topicName}</h4>
          <p
            className={`${classes['m-t-0']}
                      ${classes['start-now']}`}>
            <span className={classes['start-now-text']}>Start Now</span>
          </p>
        </div>
        <p>Total Questions: {props.totalQuestions}</p>
        <p>{
            props.questionsDone === 0 ?
            'Not Yet Started' :
            `${props.totalQuestions - props.questionsDone} more to go!`
        }</p>
      </article>
    </Link>
  );
}

export default Topic;
