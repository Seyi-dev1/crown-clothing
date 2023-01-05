import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, writeBatch } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'





const firebaseConfig = {
    apiKey: "AIzaSyDnT1cdlnojUDRW2iOKsQPUnN-UxZWhEBw",
    authDomain: "crown-db01.firebaseapp.com",
    projectId: "crown-db01",
    storageBucket: "crown-db01.appspot.com",
    messagingSenderId: "463593086856",
    appId: "1:463593086856:web:94bcf7b3331cc6e437643d"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return

   const userRef = doc(db,`/users/${userAuth.uid}`)

   const snapShot = await getDoc(userRef) 

   if(!snapShot.exists()) {
    const{ email } = userAuth
    const { displayName } = additionalData
    const createdAt = new Date()
   

   try{
    await setDoc(userRef,{
        displayName,
        email,
        createdAt,
    })
   } catch(error){
    console.log('error creating user', error.message)
   }
}

return userRef
}
 
export const getCurrentUser = async () => {
   return new Promise((resolve, reject)=>{
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
        unsubcribe()
        resolve(userAuth)
    }, reject)
   })
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const googleHandler =  () => {
     signInWithPopup(auth, provider)
}

const batch = writeBatch(db)

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

   await objectsToAdd.forEach((obj)=>{
       const newDocRef = doc(db,`/${collectionKey}/${obj.title}`)
       batch.set(newDocRef, {...obj})
    })

  return await  batch.commit()
}

export const convertCollectionsArrayToObject = (collections)=>{
     
}



  


