import { Button } from "cargo-design-system";
import 'cargo-design-system/dist/style.css';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`flex align-center justify-start ${mode} flex-col h-[100vh]`}>
      <h1 className="text-3xl font-bold underline">
        Built using cargo design system
      </h1>
      <div className='py-4'>
        <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
      </div>
      <div className='py-4'>
        <Button variant="destructive">Shadcn Button</Button>
      </div>


      <div className='py-4'>
        <ul className='text-left'>
          <li> Features:</li>
          <li> Tree-shakeable</li>
          <li> Dark mode support</li>
          <li> Override library styles with your own using tailwindcss or your own css</li>
        </ul>
      </div>
    </div>
  )
}

