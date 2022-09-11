import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import Shop from './Pages/shop page/Shop';
import Header from './Components/header/Header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { getDoc } from 'firebase/firestore/lite';


 class App extends Component {
  constructor(){
    super()

    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth)=>{
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
      const snapshot = await getDoc(userRef)
      this.setState({
        currentUser:{
          id:snapshot.id,
          ...snapshot.data()
        }
      })
     }
     else{
      this.setState({currentUser:userAuth})
     }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='signin' element={<SignInAndSignUpPage/>}/>
      </Routes>
      </div>
     );
  }
}

export default App;
