import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  limit
} from 'firebase/firestore';


import { toast } from 'react-toastify';

import { db } from 'firebase.config';

export const getListingDefault = async (baseName) => {
  const listingsRef = collection(db, baseName);

  const q = query(listingsRef);

  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    return getData.push(doc.data());
  });

  return getData;
}
export const getListing = async (baseName, uid, type, limitSize) => {


  const listingsRef = collection(db, baseName);
  
  let q;

  if(type==='userRef'){
    console.log('in', uid)
    q = query(
      listingsRef,
      where('userRef', '==', uid),
      // orderBy('timestamp', 'desc'),
      // limitSize && limit(limitSize)
    );
  }


  else if(type==='rooms'){
    q = query(
      listingsRef,
      where('interlocutors', 'array-contains', uid),
    );
  }
  else if(type==='videolist'){
    q = query(
      listingsRef,
      where('offer.invitedId', '==', uid),
    );
  }
  else if(type==='videolist-my'){
    q = query(
      listingsRef,
      where('offer.uid', '==', uid),
    );
  }
  else if(type==='binding'){
    q = query(
      listingsRef,
      where('binding.value', '==', uid),
    );
  }
  else if(type==='limit'){

    q = query(
      listingsRef,
      limit(limitSize)
    );
  }
  else{
    q = query(
      listingsRef,
      limit(limitSize)
    );
  }
  

  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    return getData.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return getData;

}



export const onDeleteCards = async (listings, listingId, name) => {
  if (window.confirm('Delete ?')) {
    await deleteDoc(doc(db, name, listingId))
    return  listings.filter((listing) => listing.id !== listingId)
  }
  else{
    return listings;
  }
}

export const onDeleteCollection = async (baseName, listingId ) => {
    try {
      await deleteDoc(doc(db, baseName, listingId))
      toast.success('Is delete');
    } catch (error) {
      toast.error('Невозможно удалить')
    }
}



