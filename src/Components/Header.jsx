function Header() {
    return(
        <div className="cabeca">
            <span className="logo"></span>
            <div className="header">
                <h1>Sistema de Estoque</h1>
                <p>Gerencie seus produtos de forma simples e eficiente</p>
                <button className="botão"><span>+</span>Novo Produto</button>
            </div>
        </div>
    )
}

export default Header