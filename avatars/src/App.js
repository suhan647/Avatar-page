import {  Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Avatars from './components/avatars/Avatars';
import AvatarDetails from './components/avatars/AvatarDetails';

function App() {
  const location = useLocation();

  const showSidebar = location.pathname === '/';

  return (
    <>
      <Header />
      <div style={{ display: 'flex', backgroundColor: '#FAFAFA', marginTop: '70px' }}>
        {showSidebar && <Sidebar />}
        <Routes>
          <Route path="/" element={<Avatars />} />
          <Route path="/details/:id" element={<AvatarDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
