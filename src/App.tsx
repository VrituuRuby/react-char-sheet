import React from 'react';
import Habilities from './components/Habilities';
import MainData from './components/MainData';
import ProefList from './components/ProefList';
import Status from './components/Status';
import './styles/GlobalStyle.css'

export default function App() {
  return (
    <div className="App">
     <div className="wrap">
       <MainData/>
       <div className="row">
        <Habilities/>
        <ProefList/>
        <div className='side-content'>
          <Status/>
        </div>

       </div>
     </div>
    </div>
  );
}


