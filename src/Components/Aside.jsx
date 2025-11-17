import { CiSearch } from "react-icons/ci";

export default function Aside() {
    return(
        <div className="butao">
           <div className="busca">
            <CiSearch size={18}/> 
            <input type="text" name="" id="" placeholder="Buscar Produtos..."/>
           </div>
        </div>
    )
}