import React from "react";
import { useState } from "react";
import "./App.css"

function App3(){
    const [name, setName] = useState ('');
    const [problema, setProblema] = useState ('');
    const [local, setLocal] = useState('');
    const [date, setDate] = useState ('');
    const [chamada, setChamada] = useState([]);

    const adicionarChamada = () =>{
        if(local.trim() !== '' && problema.trim() !== '' && date.trim() !== '' && name.trim() !== ''  ){
            const novaChamada = {
                name : name,
                problema : problema,
                local : local,
                date : date
            };
            setChamada([...chamada, novaChamada]);

            setName('');
            setProblema('');
            setLocal('');
            setDate('');
        }else{
            alert ('Porfavor preencha todos os camos!');
        }
    };

    return(

     <div className="App">
        <div className="tittle">
            <h1>CHAMADAS PARA TI</h1>

            DIGITE SEU NOME
            <input type="text"
            value={name}
            onChange ={(e) => setName(e.target.value)} />

            PROBLEMA
            <input type="text"
            value={problema}
            onChange = {(e) => setProblema(e.target.value)} />

            ENDEREÇO
            <input type="text"
            value={local}
            onChange = {(e) => setLocal(e.target.value)} />

            DATA 
            <input type="date"
            value={date}
            onChange = {(e) => setDate(e.target.value)} />
            <br />
            <button onClick={adicionarChamada}> Adicionar chamada</button>
        </div>

        <div className='results'>
            <div className="content">
            <div className="ttchamadas">
                <h2>CHAMADAS</h2>
            </div>
            <div className='trf'>
                <ol>
                  {chamada.map((chamada, index) => (
                    <li key={index}>
                        <b>Nome:</b> {chamada.name}, <br />
                        <b>Problema:</b> {chamada.problema}, <br />
                        <b>Local:</b> {chamada.local},<br />
                        <b>Data:</b> {chamada.date}
                    </li>
                  ))}  
                </ol>
            </div></div> 
        </div>
       
    </div>
        
        
    )
} export default App3;