import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import Applayout from './layout/Applayout'

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