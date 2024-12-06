import AboutMe from './AboutMe.jsx';
import Button from './Button.jsx';
import CounterButton from './CounterButton.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [displayAboutMe, setDisplayAboutMe] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplayAboutMe(!displayAboutMe)}>Click</button>
      {displayAboutMe && (
        <AboutMe
          fullName="Karan"
          clgName="YTCEM"
          address="Pune MH"
        />
      )}
      <Button />
    </div>
  );
}

export default App;