import React, { useState } from 'react';
import AdicionarFalta from './components/AdicionarFalta';
import Card from './components/Card';
//import ListaFalta from './components/ListaFalta';
import './App.css';
import ShowError from './components/ShowError';


function App() {
  const massage1 = "x"
  const massage2 = "y"
  const[buttonPopUp, setButtonPopUp] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const [cardData, setCardData] = useState({
    nomeAluno: '',
    faltas: '',
    
  });
  const handleFormSubmit = (data) => {
    setCardData(data);
  };
  const handletrigger =(Boolean) =>{
    setButtonPopUp(Boolean,massage1)
  }
  
  

  return (
    <div className="App">
      <div>
       <AdicionarFalta onSubmit ={handleFormSubmit} minValue={1} maxValue={10} trigger1 ={handletrigger} />
      </div>
      <div className='distancia'>
        <Card nomeAluno={cardData.nomeAluno} faltas ={cardData.faltas} />
      </div>
      <div>
      <ShowError trigger ={buttonPopUp} setTrigger={setButtonPopUp} /> 
      </div> 
    </div>
  );
}

export default App;
