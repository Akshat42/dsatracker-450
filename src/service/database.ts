// import * as trackerData from '../data/tracker.json';

export function indexDbInit() {
  if (!window.indexedDB) {
    throw new Error('Browser does not support indexDB :(');
  } else {
    const request: IDBOpenDBRequest = indexedDB.open('TrackerDatabase', 3);
    request.onerror = () => {
      throw new Error('Cannot establish connection');
    };
    request.onsuccess = (event) => {
      console.log('connection success!', request.result);
      // const db: IDBDatabase = request.result;
      // const objStore =db.createObjectStore('archive', {autoIncrement: true});
      // console.log(trackerData.Sheet);
    //   trackerData.Sheet.forEach((section:any) => {
    //     objStore.add(section);
    //   });
    };
  }
}


