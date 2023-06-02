import { db } from 'firebase.config';

import {
  addDoc,
  doc,
  collection,
  serverTimestamp,
  setDoc
} from 'firebase/firestore';

import { toast } from 'react-toastify';


// export const addCards = async (dataForm, baseCards, uid)=>{

//   try {
    
//     dataForm['userRef'] = uid;
//     dataForm['timestamp'] = serverTimestamp();

//     await addDoc(collection(doc(db, 'test'), baseCards), dataForm);

//     toast.success('Карточка добавлена');

//   } catch (error) {
//     toast.error('Невозможно добавить')
//     console.log(error)
//   }
// }


export const addCardsDefault = async (dataForm, baseCards, )=>{

  try {
    
    dataForm['timestamp'] = serverTimestamp();

    // await addDoc(collection(db, baseCards), dataForm);

    const frankDocRef = doc(db, baseCards, dataForm.sligPost);

    await setDoc(frankDocRef, dataForm);

    toast.success('Элемент добавален');

  } catch (error) {
    toast.error('Невозможно добавить')
    console.log(error)
  }
}

// export const addRews = async (dataForm, baseCards, listingId)=>{

//   try {
    
//     dataForm['listingRef'] = listingId;
//     dataForm['timestamp'] = serverTimestamp();

//     await addDoc(collection(db, baseCards), dataForm);
    
//     toast.success('Карточка добавлена');

    

//   } catch (error) {
//     toast.error('Невозможно обновить профиль')
//     console.log(error)
//   }
// }