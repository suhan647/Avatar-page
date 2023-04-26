import {  Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Avatars from './components/avatars/Avatars';
import AvatarDetails from './components/avatars/AvatarDetails';
import Cart from './components/cart/Cart';
import { useState } from 'react';

function App() {
  const location = useLocation();

  const showSidebar = location.pathname === '/';

  const [category, setCategory] = useState([])
  // const [womens, setwomens] = useState([])
  
  return (
    <>
      <Header />
      <div style={{ display: 'flex', backgroundColor: '#FAFAFA', marginTop: '70px' }}>
        {showSidebar && <Sidebar category={category} setCategory={setCategory}  />}
        <Routes>
          <Route path="/" element={<Avatars category={category} setCategory={setCategory}  />} />
          <Route path="/details/:id" element={<AvatarDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
