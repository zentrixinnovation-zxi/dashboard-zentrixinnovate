import Navbar from "../components/Navbar";
import MetricCard from "../components/MetricCard";
import { LineChartCard, BarChartCard, PieChartCard, AreaChartCard, RadarChartCard } from "../components/Charts";
import { Users, DollarSign, ShoppingCart, Eye, Percent, Smile } from "lucide-react";

function Dashboard() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 bg-gray-100 min-h-screen">
          {/* Métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            <MetricCard title="Usuarios" value="1,200" change="+5%" icon={<Users size={20} />} />
            <MetricCard title="Ventas" value="$8,450" change="+8%" icon={<DollarSign size={20} />} />
            <MetricCard title="Órdenes" value="320" change="-2%" icon={<ShoppingCart size={20} />} />
            <MetricCard title="Tasa de conversión" value="3.5%" change="+0.3%" icon={<Percent size={20} />} />
            <MetricCard title="Satisfacción" value="92%" change="+4%" icon={<Smile size={20} />} />
          </div>

          {/* Gráficos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LineChartCard />
            <BarChartCard />
            <PieChartCard />
            <AreaChartCard />
            <RadarChartCard />
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;