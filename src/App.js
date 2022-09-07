import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import Shop from './Pages/shop page/Shop';
import Header from './Components/header/Header';
function App() {
  return (
   <div>
   <Header/>
   <Routes>
   <Route path='/' element={<Homepage/>}/>
   <Route path='shop' element={<Shop/>}/>
   </Routes>
   </div>
  );
}

export default App;
