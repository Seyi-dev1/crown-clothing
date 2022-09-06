import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import Shop from './Pages/shop page/Shop';
function App() {
  return (
   <div>
   <Routes>
   <Route path='/' element={<Homepage/>}/>
   <Route path='shop' element={<Shop/>}/>
   </Routes>
   </div>
  );
}

export default App;
