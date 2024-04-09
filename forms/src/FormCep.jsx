import { useState } from "react";

function Cep(){
   const  [nome, setNome] = useState('');
   const  [tel, setTel] = useState('');
   const  [cep, setCep] = useState('');
   const [endereco, setEndereco] = useState(null);

   const buscaCep = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    setEndereco(data);
    setNome(nome);
    setTel (tel);
   };

   const enviaMsg = async () => {
    const mensagem = encodeURIComponent(`Oi, ${nome} Aqui está o endereço: ${endereco.logradouro} ${endereco.bairro} ${endereco.localidade} ${endereco.uf}.`);
    const link = `https://api.whatsapp.com/send?phone=${tel}&text=${mensagem}`;
    
    window.open(link);
    };

    return (
        <div className="App">
            <div className="tittle">
            <h3>NOME: <br />
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="ex: Jorge Silva" />
            </h3>

            <h3>TELEFONE: <br />
            <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="ex: 71988745236" />
            </h3>

            <h3>CEP: <br />
            <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="ex: 42105000" />
            </h3>


            <button onClick={buscaCep}> Buscar Cep</button>
            </div>
            <div className="results">
            {endereco && (
                <div className="content">
                    <h2>Endereço encontrado</h2>
                    <p>CEP: {endereco.cep}  </p>
                    <p>Rua: {endereco.logradouro} </p>
                    <p>Bairro: {endereco.bairro}  </p>
                    <p>Cidade: {endereco.localidade} </p>
                    <p>Estado: {endereco.uf}</p>
                    <br />

                    <button onClick={enviaMsg}> ENVIAR MENSAGEM</button>
                </div>
                
            )}
            </div>
            </div>
       

        
    );
 }
export default Cep