import './ProcuraProdutos.css';
import { useRef,useState,useEffect } from 'react';


export default function ProcuraProdutos({produtos}) {
  const todosprodutos = produtos;
  const produtoRef = useRef();
  const quantidadeRef = useRef();
  const [carrinho, setCarrinho] = useState([]);
  const [cupom, setCupom] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);


  function atualizarPrecoTotal() {
    const novoPrecoTotal = carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
    setPrecoTotal(novoPrecoTotal);
  }
  useEffect(() => {  
    atualizarPrecoTotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cupom]);

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
          setCupom([...cupom, {operacao:'+',...encontrado,quantidade,precoFinal:encontrado.preco*quantidade}])
        }
    } else {
         alert(`Produto com codigo ${codigo} não foi encontrado`);
    }
  }
  function handleExcluir (index){
    const produtoExcluido = carrinho[index];
    const novoCarrinho = carrinho.filter((_, item) => item !== index);
    setCarrinho(novoCarrinho);
    setCupom([...cupom, { operacao: '-', ...produtoExcluido, quantidade: produtoExcluido.quantidade, precoFinal: produtoExcluido.preco * (produtoExcluido.quantidade * -1) }]
    )   
  }
 
    console.log (cupom);
    

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
          <h2 className='carrinho'>Carrinho</h2>
          <ul>
            {carrinho.map((produto, index) => (
              <li key={index}>
                {produto.codigo} - {produto.descricao} - {produto.marca} - {produto.preco} - {produto.quantidade}
                <button  onClick={()=>handleExcluir(index)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Cupom</h2>
          <ul>
            {cupom.map((produto, index) => (
              <li key={index}>
                {produto.operacao} {produto.codigo} {produto.descricao} {produto.preco} {produto.quantidade} {produto.precoFinal}
              </li>
            ))}
           <li> total = {precoTotal}</li>
          </ul>
        </div>
    </div>
    );	 
}
