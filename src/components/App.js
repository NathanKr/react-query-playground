import React from 'react';
import Rates from './Rates'
import {ReactQueryDevtools} from 'react-query-devtools'


function App() {
  return (
    <div className="App">
      <Rates/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </div>
  );
}

export default App;
