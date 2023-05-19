import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import './App.scss';
import Home from '../home/Home';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <header className="app-header">
            TaskBoard
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
