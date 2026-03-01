import { FiPackage } from "react-icons/fi";

export default function Main({ listaProdutos }) {

    const totalProdutos = listaProdutos.length;

    const totalEstoque = listaProdutos.reduce((total, item) => {
        return total + Number(item.quantidade);
    }, 0);

    const valorTotal = listaProdutos.reduce((total, item) => {
        return total + (Number(item.quantidade) * Number(item.preco));
    }, 0);

    return (
        <div className="card">

            <div className="cards">
                <div>
                    <p>Total de Produtos</p>
                    <span className="num">{totalProdutos}</span>
                </div>
                <span className="icon">
                    <FiPackage size={30} color="blue"/>
                </span>
            </div>

            <div className="cards">
                <div>
                    <p>Itens em Estoque</p>
                    <span className={`num ${totalEstoque < 5 ? "alerta" : ""}`}>
  {totalEstoque}
</span>
                </div>
                <span className="icon">
                    <FiPackage size={30} color="green"/>
                </span>
            </div>

            <div className="cards">
                <div>
                    <p>Valor Total</p>
                    <span className="num">
                    {valorTotal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                    </span>
                </div>
                <span className="icon">
                    <FiPackage size={30} color="blue"/>
                </span>
            </div>

        </div>
    )
}
