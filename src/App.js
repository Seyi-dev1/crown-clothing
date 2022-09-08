import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import Shop from './Pages/shop page/Shop';
import Header from './Components/header/Header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';


 class App extends Component {
  constructor(){
    super()

    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=>{
      this.setState({currentUser: user})
      console.log(user)
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
