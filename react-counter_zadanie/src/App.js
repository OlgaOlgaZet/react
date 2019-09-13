import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counterfn from './components/counter-fn'; //importujemy z pliku counter-fn.jsx nasza zmienna i w divcie to przywołujemy 
import Counter from './components/counter/counter';
function App() {
  return (
    <div>
    <Counter initValue='10'/> 
    </div>
  );
}
// albo {10} w divie zamiast '10'
export default App;
