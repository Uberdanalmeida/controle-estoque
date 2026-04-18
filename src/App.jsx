import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Cadastro from "./Components/Cadastro";
import Modal from "./Components/Modal";
import Grafico from "./Components/Grafico";
import { useState, useEffect } from "react";

import { supabase } from "./supabaseClient";
// ... outros imports

export default function App() {
  const [cadastroUsuario, setCadastroUsuario] = useState([]);

  // BUSCAR PRODUTOS (SELECT)
  useEffect(() => {
    getProdutos();
  }, []);

  async function getProdutos() {
    const { data, error } = await supabase.from('produtos').select('*');
    if (data) setCadastroUsuario(data);
  }

  // ADICIONAR PRODUTO (INSERT)
  async function MostrarCadastro(novoProduto) {
    const { data, error } = await supabase
      .from('produtos')
      .insert([novoProduto])
      .select();

    if (!error) {
      setCadastroUsuario([...cadastroUsuario, data[0]]);
      setToast("Produto adicionado com sucesso!");
      setExibirModal(false);
    }
  }

  // REMOVER PRODUTO (DELETE)
  async function removerProduto(idProduto) {
    if (window.confirm("Deseja remover este produto?")) {
      const { error } = await supabase
        .from('produtos')
        .delete()
        .eq('id', idProduto);

      if (!error) {
        setCadastroUsuario(cadastroUsuario.filter((p) => p.id !== idProduto));
      }
    }
  }

  // EDITAR PRODUTO (UPDATE)
  async function editarProduto(produtoEditado) {
    const { error } = await supabase
      .from('produtos')
      .update(produtoEditado)
      .eq('id', produtoEditado.id);

    if (!error) {
      setCadastroUsuario(
        cadastroUsuario.map((p) => (p.id === produtoEditado.id ? produtoEditado : p))
      );
    }
  }

  return (
    <div className="principal">
      <Header abrirModal={abrirModal} />

      <div className="container">
        <Main listaProdutos={cadastroUsuario} />

        <Grafico listaProdutos={cadastroUsuario} />

        <div className="busca">
          <Aside busca={busca} setBusca={setBusca} />
        </div>

        <Cadastro
          listaProdutos={cadastroUsuario}
          removerProduto={removerProduto}
          editarProduto={editarProduto}
          busca={busca}
        />
      </div>

      {exibirModal && (
        <Modal fecharModal={fecharModal} MostrarCadastro={MostrarCadastro} />
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
