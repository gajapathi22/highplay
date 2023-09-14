import './App.css';
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';

import SignUp from './components/SignUp';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import OurWorks from './components/pages/OurWorks';
import { useState } from 'react';



function App() {

  const [showSignupBox, setShowSignupBox] = useState(false);

  return (

      <>
        <BrowserRouter>

          <Navbar onSignUpClick={() => setShowSignupBox(true)} /> 
         
          {showSignupBox && <SignUp onClose={() => setShowSignupBox(false)} />}
          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/ourworks" element={<OurWorks/>} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </div>

        </BrowserRouter>
        
      </>
  );
}

export default App;
