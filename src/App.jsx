import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Cadastro from './Components/Cadastro';
import { useState } from 'react';

export default function App() {

  const [estoque, setEstoque] = useState([{
    produto: 'qualquer coisa',
    categoria: '1212',
    quantidade: 10,
    preço: 10,
  }])

  return(
    <div className="principal">
      <Header></Header>
      <Main></Main>
      <Aside></Aside>
      <Cadastro></Cadastro>
    </div>
  )
}