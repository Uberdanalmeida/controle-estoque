import { FiPackage } from "react-icons/fi";

export default function Main() {
    return(
        <div className="card">
            <div className="cards">
                <div>
                    <p>Total de Produtos</p>
                    <span className="num">1</span>
                </div>
                <span className="icon"><FiPackage size={30} color="blue"/></span>
            </div>
            <div className="cards">
                <div>
                    <p>Itens em Estoque</p>
                    <span className="num">10</span>
                </div>
                <span className="icon"><FiPackage size={30} color="green"/></span>
            </div>
            <div className="cards">
                <div>
                    <p>Valor Total</p>
                    <span className="num">R$ 100,00</span>
                </div>
                <span className="icon"><FiPackage size={30} color="blue"/></span>
            </div>
        </div>
    )
}