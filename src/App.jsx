import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";

export default function App() {
  return(
    <div className="principal">
      <Header></Header>
      <Main></Main>
      <Aside></Aside>
    </div>
  )
}