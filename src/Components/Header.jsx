import { FiPackage } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

function Header() {
    return(
        <div className="cabeca">
            <div className="header">
                <span className="logo"><FiPackage  size={40} color="white" /></span>
                <div>
                    <h1>Sistema de Estoque</h1>
                    <p className="cab">Gerencie seus produtos de forma simples e eficiente</p>
                </div>
            </div>
            <button className="botao"><IoMdAdd size={20} /> Novo Produto</button>
        </div>
    )
}

export default Header