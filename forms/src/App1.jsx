import { useState } from 'react'
import './App.css'

function App1() {
  const [text, setText] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const criarTarefa = () => {
    if(text !== ''){
      setTarefas([...tarefas,{text:text, date:date, time:time}]);
      setText('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div className='App'>
      <div className='tittle'>
      <h1>TAREFAS</h1>

      <input type="text" 
      value = {text}
      onChange={(e) => setText(e.target.value)} 
      placeholder='DIGITE A TAREFA'/>
      <br />

      <input type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)} 
      placeholder='DIGITE A DATA'/>
      <br />
  <input type="time"
      value={time}
      onChange={(e) => setTime(e.target.value)} />
      
      <br />

      <button onClick={criarTarefa}>ADD TAREFAS</button>
      </div>

      <div className='results'>
        <div className='trf'>
        <ol>{tarefas.map((tarefas,index) => (
        <li key={index}>{tarefas.text} - {tarefas.date} - {tarefas.time}</li>
      ))}
        </ol>
        </div> 
      </div>
       
    </div>
  )
}

export default App1