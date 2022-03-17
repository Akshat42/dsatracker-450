import {dsaArchive} from '../data/tracker';

export function indexDbInit() {
  if (!window.indexedDB) {
    console.log('Your browser doesn\'t support a stable version of IndexedDB');
    return false;
  }
  const request: IDBOpenDBRequest = window.indexedDB.open('MyTestDatabase', 3);
  request.onerror = (event) => {
    console.log(request.error);
    return false;
  };

  request.onsuccess = () => {
    return true;
  };

  request.onupgradeneeded = (event) => {
    const db = request.result;
    const objectStore = db.createObjectStore('archive', {autoIncrement: true});
    dsaArchive.forEach((questionData) => {
      objectStore.add(questionData);
    });
    return true;
  };
}
