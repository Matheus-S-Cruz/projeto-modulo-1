import './ListagemProdutos.css';

export default function ListagemProdutos({produtos}) {
    console.log (produtos)
    return ( 
    <>
    <h1 className='ListaTitulo'>
        Lista de Produtos
    </h1>
    <div>
    {produtos.map (cadaProduto => 
                 <div className="Produtos" key={cadaProduto.codigo}>
                    <p>
                        {cadaProduto.codigo} - {cadaProduto.descricao} - {cadaProduto.marca} - {cadaProduto.preco}
                    </p>
                </div>
            ) 
        }
        </div>
        </>
    )
}

