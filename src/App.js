import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Error from './component/Error';
import Greetings from './component/Greetings';
import { useState } from 'react';

function App() {

  const [ isAlertVisible, setIsAlertVisible ] = useState(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 1500);

  return (
    <div className="App">
      {isAlertVisible && <Greetings />}
      
      <Navbar />
      <div className="content">
        <div>
        <Routes>
          <Route strict exact path='/' element={<Home />} />
          <Route strict exact path='/projects' element={<Projects />} />
          <Route strict exact path='/resume' element={<Resume />} />
          <Route strict exact path='/contact' element={<Contact />} />
          <Route strict exact path='*' element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
