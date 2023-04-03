import React , {useState} from "react";
import './AdicionarFalta.css';
import ShowError from './ShowError';


function AdicionarFalta(props){
    
    const [nomeAluno, setNomeAluno] = useState('');
    const [faltas, setFaltas] = useState('');

    /*const handleSubmit = (e) => {
      e.preventDefault();
      props.onAddCard({ nomeAluno, faltas});
      setNomeAluno('');
      setFaltas('');
      
    };*/

   

    const handleChange = (event) => {
        const newValue = event.target.value;
        const minValue = 1; // Set the minimum value
        const maxValue = 30; // Set the maximum value
        if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
          // Check if the new value is a valid number within the allowed range
          setFaltas(newValue);
        }
      };

    const submitHandler = (event) => {
      event.preventDefault();
      if(nomeAluno === '' && faltas === ''){
        props.trigger1(true)

      }
      else{
        let dados = {
          nomeAluno: nomeAluno,
          faltas: faltas
          
        }
    
        
        props.onSubmit(dados);
    
        setNomeAluno('');
        setFaltas('');
        
    
        console.log(dados);
  
      }
      


    };

    return(
      
      <form onSubmit={submitHandler}>
        <div className="new-disciplina__controls">
          <div className="new-disciplina__control">
            <label>Nome Completo: </label>
            <input type="text" value={nomeAluno} placeholder="Nome do aluno"  onChange={(e) => setNomeAluno(e.target.value)} className="numeric-input"/>
          </div>
          <div className="new-disciplina__control">
            <label>Faltas:</label>
            <input type="number"  value={faltas} min="0" max="100" onChange={handleChange} className="numeric-input" />
          </div>
        </div>
        <div className="div_of_button">
          <button type="submit" >Adicionar</button>
        </div>
      </form>
       

    );
}
export default AdicionarFalta;