import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Grafico({ listaProdutos }) {

  const categorias = {};

  listaProdutos.forEach(p => {
    if (!categorias[p.categoria]) {
      categorias[p.categoria] = 0;
    }
    categorias[p.categoria] += Number(p.quantidade);
  });

  const dados = Object.keys(categorias).map(cat => ({
    categoria: cat,
    quantidade: categorias[cat],
  }));

  if (dados.length === 0) return null;

  return (
    <div className="grafico">
      <h3>Estoque por categoria</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={dados}>
          <XAxis dataKey="categoria" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantidade" radius={[8,8,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}