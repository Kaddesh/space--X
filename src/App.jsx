import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Home from './pages/home';
import Technology from './pages/technology';
import './styles/global.scss';
import { DataProvider } from './components/context';

function App() {
  return (
    <DataProvider> 
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
