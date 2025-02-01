import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Timestamp, addDoc, updateDoc, doc, getDoc, increment, DocumentData, QuerySnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useQuery, QueryOptions } from "react-query";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
//   authDomain: "mcmaster-msa.firebaseapp.com",
//   databaseURL: "https://mcmaster-msa.firebaseio.com",
//   projectId: "mcmaster-msa",
//   storageBucket: "mcmaster-msa.appspot.com",
//   messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID as string,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDaRNhgwE9rdEd8flqgUW9JiBWQ0M3F7XQ",
  authDomain: "mcmaster-msa.firebaseapp.com",
  databaseURL: "https://mcmaster-msa.firebaseio.com/",
  projectId: "mcmaster-msa",
  storageBucket: "mcmaster-msa.appspot.com",
  messagingSenderId: "293829944925",
  appId: "1:293829944925:web:0dc9790db3aac108950fb4",
};

const firebaseApp = initializeApp(firebaseConfig);
export var firestore = getFirestore();
export var storage = getStorage(firebaseApp);



interface CollectionItem {
  id: string;
  title?: string;
  name?: string;
  storageObject?: string;
  [key: string]: any;
}

export const convertCollectionSnapshotToMap = (collection: QuerySnapshot<DocumentData>) => {
  const transformedCollection = collection.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    } as CollectionItem;
  });
  const transformed = transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[
        collection.title || collection.name || collection.storageObject || collection.id
      ] = collection;
      return accumulator;
    },
    {} as { [key: string]: CollectionItem }
  );
  return transformed;
};

export const convertMapToArray = <T>(map: { [key: string]: T }): T[] => {
  var allItems: Array<T> = [];
  for (const indItem in map) {
    allItems.push(map[indItem] as T);
  }
  return allItems;
};

export const getCollection = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const collectionObj = await convertCollectionSnapshotToMap(snapshot);
  return collectionObj;
};

// Custom hook using react-query to fetch collections from Firestore
export const useFirestoreQuery = (
  collectionName: string,
  options?: QueryOptions
) => {
  return useQuery(
    ["collection", collectionName],
    () => getCollection(collectionName),
    options
  );
};

export const getMIMCCouponsRemaining = async (couponCodeName: string) => {
  const docRef = doc(firestore, 'mimc-coupons', couponCodeName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().couponsRemaining;
  } else {
    return null;
  }
};

export const convertTimestampToDate = (date: { seconds: number; nanoseconds: number; }) => {
  const timestamp = new Timestamp(date.seconds, date.nanoseconds)
  return timestamp.toDate().toString();
};

const removeExtraDate = (time: string | number | Date) => {
  const timestamp = new Date(time);
  const formattedTimestamp = timestamp.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short' });
  const result = formattedTimestamp.replace(/ GMT.*/, '');
  return result
}

export const test = () => {
  const url = 'https://firebasestorage.googleapis.com/v0/b/mcmaster-msa.appspot.com/o/money-sent-confirmation-en.jpeg?alt=media&token=85c574ab-0c2c-496c-96c7-062adcd5f192&_gl=1*1har94k*_ga*NDU2ODM1OTg2LjE2OTc3MzcyNjA.*_ga_CW55HF8NVT*MTY5ODE2MzM3Mi45LjEuMTY5ODE2NDMxMC42MC4wLjA.'

  const pathReference = ref(storage, url);

}