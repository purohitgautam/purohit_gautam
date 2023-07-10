import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Contact from './component/Contact';
import NoDemo from './component/NoDemo';
import Error from './component/Error';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route strict exact path='/' element={<Home />} />
      <Route strict exact path='/projects' element={<Projects />} />
      <Route strict exact path='/resume' element={<Resume />} />
      <Route strict exact path='/contact' element={<Contact />} />
      <Route strict exact path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
