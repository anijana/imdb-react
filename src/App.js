
import './App.css';

// components
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CategoryMovies from './pages/CategoryMovies';




function App() {
  return (
   <>
   <Router>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/categories' element={<CategoryMovies/>}/>
      <Route path='/*' element={<Home/>}/>
     </Routes>
   </Router>
   </>
  );
}

export default App;
