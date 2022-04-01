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
        .add(ele, ele.id);
  });
}

export async function getAllData(): Promise<TopicSet[]> {
  const db = getDBPointer();
  return db.collection('archive').get();
}

export async function getDataByTopic(topicId:string | undefined) {
  if (topicId) {
    const db = getDBPointer();
    db.collection('archive').doc({id: topicId}).get().then((data: any) => {
      console.log(data);
    });
  } else {
    console.error('somthing went wrong!');
  }
}
