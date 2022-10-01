import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import Shop from './Pages/shop page/Shop';
import Header from './Components/header/Header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { getDoc } from 'firebase/firestore/lite';
import {  useDispatch } from 'react-redux'
import { updateCurrentUser } from './redux/user/userReducer'
import CheckOutPage from './Pages/checkout/checkOut';
import CollectionPage from './Pages/category/Category';



 const App = ()=>{

const dispatch = useDispatch()
 

 React.useEffect(
  ()=>{
      auth.onAuthStateChanged(async (userAuth)=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        const snapshot = await getDoc(userRef)
    
      dispatch(updateCurrentUser({
        id:snapshot.id,
        ...snapshot.data()
      }))
      
      }
      else{
        dispatch(updateCurrentUser(null))
       }
    })
    // eslint-disable-next-line
   },[]
)

 
    return (
      <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/:shopId' element={<CollectionPage/>}/>
      <Route path='signin' element={<SignInAndSignUpPage/>}/>
      <Route path='checkout' element={<CheckOutPage/>}/>
      </Routes>
      </div>
     );
  }
 
  
 


export default App;
