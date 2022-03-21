import dsaArchive from '../data/tracker';
// @ts-ignore
import Localbase from 'localbase';


export function getDBPointer() {
  return new Localbase('db');
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
