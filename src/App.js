import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
       <Routes>
         <Route path="/" element={<Homepage/>} exact/>
       </Routes>
    </>
  );
}

export default App;
