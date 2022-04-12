import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Goods from "./components/Goods/Goods";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <div className="App myClass">
        <ThemeProvider>
            <Header />
            <Goods />
        </ThemeProvider>
    </div>
  );
}

export default App;
