
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
      <article
        className={props.questionsDone ?
      `${classes['started']} ${classes['card']}` :
      `${classes['not-started']} ${classes['card']}` }>
        <div className={classes['flex-pill']}>
          <h4 className={`${classes['sub-heading']}`}>{props.topicName}</h4>
          {props.questionsDone ?
          <p
            className={`${classes['green']} ${classes['m-t-0']}
                      ${classes['start-now']}`}>
            <span className={classes['start-now-text']}>Solve Now</span>
          </p>:
          <p
            className={`${classes['m-t-0']}
                        ${classes['blue']}
                        ${classes['start-now']}`
            }>
            <span className={classes['start-now-text']}>Start Now</span>
          </p>}
        </div>
        <div className={classes.left}>
          <p>Total Questions: {props.totalQuestions}</p>
          <p>{
            props.questionsDone === 0 ?
            'Not Yet Started' :
            `${props.totalQuestions - props.questionsDone} more to go!`
          }</p>
        </div>
      </article>
    </Link>
  );
}

export default Topic;
