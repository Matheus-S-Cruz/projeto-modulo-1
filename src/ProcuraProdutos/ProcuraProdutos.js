import './ProcuraProdutos.css';
import { useRef,useState } from 'react';


export default function ProcuraProdutos({produtos}) {
  const todosprodutos = produtos;
  const produtoRef = useRef();
  const quantidadeRef = useRef();
  const [carrinho, setCarrinho] = useState([]);

    function handleAdicionar (){
        const quantidade = quantidadeRef.current.value;
        const codigo = produtoRef.current.value;
        // eslint-disable-next-line eqeqeq
        const encontrado = todosprodutos.find(produto => produto.codigo == codigo);
        if (encontrado) {
          const produtoJaExiste = carrinho.some(produto => produto.codigo === encontrado.codigo);
          if (produtoJaExiste) {
            alert('Produto já está no carrinho');
         } else { 
        setCarrinho([...carrinho, {...encontrado,quantidade}])
        }
    } else {
         alert(`Produto com codigo ${codigo} não foi encontrado`);
    }
  }

console.log(carrinho);
    return (
        
     <div className='Pesquisar'>

        <h2>Pesquisar Produto</h2>
      <div>
        <label htmlFor="codigo">Código:</label>
        <input type = "number" min={1001} max={1016} ref={produtoRef} />
        <label htmlFor="quantidade">Quantidade:</label>
        <input type = "number" min={1} max={20} ref={quantidadeRef} />
      </div>
        <button onClick={handleAdicionar}>Adicionar</button>
        <div>
          <h2>Carrinho</h2>
          <ul>
            {carrinho.map((produto, index) => (
              <li key={index}>
                {produto.codigo} - {produto.descricao} - {produto.marca} - {produto.preco} - {produto.quantidade}
                <button  onClick={() => setCarrinho(carrinho.filter((desabilitado, item) => item !== index))}>Remover</button>
                
              </li>
            ))}
          </ul>
        </div>
    </div>
    );	 
}
