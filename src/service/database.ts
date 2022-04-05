import dsaArchive from '../data/tracker';
// @ts-ignore
import Localbase from 'localbase';
import {TopicSet} from '../models/TopicSet';


export function getDBPointer() {
  const db = new Localbase('db');
  db.config.debug = false;
  return db;
}

export async function indexDbInit() {
  console.log('creating Db');
  if (!window.indexedDB) {
    console.log('Your browser doesn\'t support a stable version of IndexedDB');
    return null;
  }
  const db = getDBPointer();
  console.log(await db.collection('archive').get());
  dsaArchive.forEach(async (ele) => {
    db.collection('archive')
        .add(ele, ele.id);
  });
}

export async function getAllData(): Promise<TopicSet[]> {
  const db = getDBPointer();
  return db.collection('archive').get();
}

// eslint-disable-next-line max-len
export async function getDataByTopic(topicId:string | undefined): Promise<TopicSet> {
  const db = getDBPointer();
  return db.collection('archive')
      .doc({id: topicId})
      .get();
}

export async function markQuestionDone(topicId: string, questionIndex: number) {
  const db = getDBPointer();
  db.collection('archive')
      .doc(topicId)
      .get().then( (data: TopicSet) => {
        data.doneQuestions++;
        data.questions.forEach((question, index) => {
          if (index === questionIndex) {
            question.Done = !question.Done;
          }
        });
        db.collection('archive').doc(topicId).update(data);
      });
}

export async function unmarkQuestion(topicId: string, questionIndex: number) {
  const db = getDBPointer();
  db.collection('archive')
      .doc(topicId)
      .get().then( (data: TopicSet) => {
        data.doneQuestions--;
        data.questions.forEach((question, index) => {
          if (index === questionIndex) {
            question.Done = !question.Done;
          }
        });
        db.collection('archive').doc(topicId).update(data);
      });
}
