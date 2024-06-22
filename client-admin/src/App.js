import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Routes>
          <Route path='/admin' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
