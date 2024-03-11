import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Facts from './components/Facts/Facts';
import Quotes from './components/Quotes/Quotes';
import Currency from './components/Currency/Currency';
import "@fontsource/merriweather"; 


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/facts" element={<Facts/>}/>
      <Route path="/quotes" element={<Quotes/>}/>
      <Route path="/currency" element={<Currency/>}/>

    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
