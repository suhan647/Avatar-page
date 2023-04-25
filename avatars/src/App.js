import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header'
import Avatars from './components/avatars/Avatars';

function App() {
  return (
    <>
    <Header />
    <div style={{display:'flex', backgroundColor:'#FAFAFA'}}>
      <Sidebar />
      <Avatars/>
      </div>
    </>
  );
}

export default App;
