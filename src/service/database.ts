import dsaArchive from '../data/tracker';
// @ts-ignore
import Localbase from 'localbase';
import {TopicSet} from '../models/TopicSet';


export function getDBPointer() {
  const db = new Localbase('db');
  db.config.debug = false;
  return db;
}

export function indexDbInit():any {
  if (!window.indexedDB) {
    console.log('Your browser doesn\'t support a stable version of IndexedDB');
    return null;
  }
  const db = getDBPointer();
  dsaArchive.forEach((ele) => {
    db.collection('archive')
        .add(ele, ele.topicName.toLowerCase().replaceAll(' ', '_'));
  });
}

export async function getAllData(): Promise<TopicSet[]> {
  const db = getDBPointer();
  return await db.collection('archive').get();
}
