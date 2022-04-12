import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Goods from "./components/Goods/Goods";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <div className="App myClass">

                <Header/>
                <Goods/>

            </div>
        </ThemeProvider>
    );
}

export default App;
