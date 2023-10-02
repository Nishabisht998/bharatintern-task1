// import logo from './logo.svg';

import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import Createpost from './components/Createpost';
// import Post from './components/Post';

function App() {
  return (
    <div> 
      <div className="blur" style={{top:'-160px', right:'0'}}></div>
    <div className="blur" style={{top:'230px', left:'-200px'}}></div>
    <div className="blur" style={{top:'550px', right:'-150px'}}></div>
      <div className="blur" style={{top:'-860px', right:'190'}}></div>
    <BrowserRouter>
    <Toaster/>
      <Header/>
      <Routes>
       
        <Route path="/" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/create" element={<Createpost/>} />
        {/* <Route path="/" element={<Post/>} /> */}
         
          
       
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
