import dsaArchive from '../data/tracker';
// @ts-ignore
import Localbase from 'localbase';
import {TopicSet} from '../models/TopicSet';
import {Stats} from '../models/Stats';


export function getDBPointer() {
  const db = new Localbase('db');
  db.config.debug = false;
  return db;
}

export async function indexDbInit() {
  console.log('creating Db');
  if (!window.indexedDB) {
    alert('Your browser doesn\'t support a stable version of IndexedDB');
    return null;
  }
  const db = getDBPointer();
  dsaArchive.forEach(async (ele) => {
    await db.collection('archive')
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
  await db.collection('archive')
      .doc(topicId)
      .get().then( async (data: TopicSet) => {
        data.doneQuestions++;
        data.questions.forEach((question, index) => {
          if (index === questionIndex) {
            question.Done = !question.Done;
          }
        });
        await db.collection('archive').doc(topicId).update(data);
      });
  await db.collection('stats')
      .doc('stats')
      .get().then( async (data: any) => {
        data.totalDoneQuestions++;
        await db.collection('stats').doc('stats').update(data);
      });
}

export async function unmarkQuestion(topicId: string, questionIndex: number) {
  const db = getDBPointer();
  await db.collection('archive')
      .doc(topicId)
      .get().then(async (data: TopicSet) => {
        data.doneQuestions--;
        data.questions.forEach((question, index) => {
          if (index === questionIndex) {
            question.Done = !question.Done;
          }
        });
        await db.collection('archive').doc(topicId).update(data);
      });
  await db.collection('stats')
      .doc('stats')
      .get().then( async (data: Stats) => {
        data.totalDoneQuestions--;
        await db.collection('stats').doc('stats').update(data);
      });
}

export async function getStats(): Promise<Stats> {
  const db = getDBPointer();
  return db.collection('stats').doc('stats').get();
}
