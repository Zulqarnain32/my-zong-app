import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Navbarr from './components/Navbarr';
import Usage from './components/Usage';
import Footer from './components/Footer';
import Recharge from './components/Recharge';
import Loan from './components/Loan';
import Search from './components/Search';
import Ring from './components/Ring';
import MoreApps from './components/MoreApps';
import FooterBundle from './components/FooterBundle';
import Initial from './components/Initial'
import Zplay from './components/Zplay';
import "./App.css";

const App = () => {
  const [showInitial, setShowInitial] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitial(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      { !showInitial && <Navbarr/> }
      <Routes>
        <Route path="/" element={showInitial ? <Initial /> : <Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/usage" element={<Usage />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/search" element={<Search />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/more" element={<MoreApps />} />
        <Route path="/bundle" element={<FooterBundle />} />
        <Route path="/zplay" element={<Zplay />} />
      </Routes>
      { !showInitial && <Footer /> }
    </>
  );
}

export default App;
