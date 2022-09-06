import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
const HatsPage = ()=>{
  console.log()
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}
const Jackets = ()=>{
  console.log()
  return(
    <div>
      <h1>JACKETS PAGE</h1>
    </div>
  )
}
const Sneakers = ()=>{
  console.log()
  return(
    <div>
      <h1>SNEAKERS PAGE</h1>
    </div>
  )
}
const Womens = ()=>{
  console.log()
  return(
    <div>
      <h1>WOMENS PAGE</h1>
    </div>
  )
}
const Mens = ()=>{
  console.log()
  return(
    <div>
      <h1>MENS PAGE</h1>
    </div>
  )
}
function App() {
  return (
   <div>
   <Routes>
   <Route path='/' element={<Homepage/>}/>
   <Route path='hats' element={<HatsPage/>}/>
   <Route path='jackets' element={<Jackets/>}/>
   <Route path='sneakers' element={<Sneakers/>}/>
   <Route path='mens' element={<Mens/>}/>
   <Route path='womens' element={<Womens/>}/>
   </Routes>
   </div>
  );
}

export default App;
