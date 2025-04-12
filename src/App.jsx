import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout.jsx'
import Applayout from './layout/AppLayout.jsx'

const App = () => {
  const { token, setToken } = useState('');
  if (!token) {
    return (
      <Applayout token={token} />
    );
  }
  
  return (
    <MainLayout />
  );
}

export default App;