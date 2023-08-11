import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SignUp from './components/SignUp';
import { useState } from 'react';

const App = () => {
  const [showSignupBox, setShowSignupBox] = useState(false);

  return (
    <div>
      <Navbar onSignUpClick={() => setShowSignupBox(true)} />
      <Banner />
      {showSignupBox && <SignUp onClose={() => setShowSignupBox(false)} />}
    </div>
  );
};

export default App;
