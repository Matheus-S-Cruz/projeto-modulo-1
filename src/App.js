import './App.css';
import ListagemProdutos from './ListaProdutos/ListagemProdutos';
import ProcuraProdutos from './ProcuraProdutos/ProcuraProdutos';
import { useEffect, useState } from 'react';

function App() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch ('Produtos.json')
    .then (resp => resp.json())
    .then (dados => setProdutos(dados))
    .catch(error => console.log (error));
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Loja de Departamento FuturoDEV
        </p>

      </header>
      
    <ListagemProdutos produtos={produtos}/>
    <ProcuraProdutos produtos={produtos}/>
    </div>
  );
}

export default App;
