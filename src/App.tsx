import { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import ErrorPage from './Pages/ErrorPage';
import NavBar from './components/NavBar';
import Contacts from "./components/Contacts";

const App: FC = () => {
  return (
    <Router>
      <div className='main'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/education' element={<Education />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Contacts />
        </div>
      </div>
    </Router>
  );
}

export default App;
