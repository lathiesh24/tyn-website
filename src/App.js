import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Alliance from './components/Alliance';
import CoInnovation from './components/CoInnovation';

function App() {
  return (
    <>
       <Routes>
         <Route path="/" element={<Homepage/>} exact/>
         <Route path="/alliance" element={<Alliance/>} exact/>
         <Route path="/co-innovation" element={<CoInnovation/>} exact/>
       </Routes>
    </>
  );
}

export default App;
