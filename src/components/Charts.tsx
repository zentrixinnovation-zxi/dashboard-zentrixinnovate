import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

// Datos de ejemplo
const data = [
  { name: "Ene", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Abr", value: 800 },
  { name: "May", value: 500 },
];

const pieData = [
  { name: "A", value: 40 },
  { name: "B", value: 30 },
  { name: "C", value: 30 },
];

const radarData = [
  { subject: "Ventas", A: 120, fullMark: 150 },
  { subject: "Usuarios", A: 98, fullMark: 150 },
  { subject: "Órdenes", A: 86, fullMark: 150 },
  { subject: "Visitas", A: 130, fullMark: 150 },
  { subject: "Conversión", A: 99, fullMark: 150 },
  { subject: "Satisfacción", A: 110, fullMark: 150 },
];

const COLORS = ["#2563eb", "#16a34a", "#9333ea"];

// LineChart
export function LineChartCard() {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="font-semibold mb-4">📈 Evolución mensual</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// BarChart
export function BarChartCard() {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="font-semibold mb-4">📊 Comparación de categorías</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// PieChart
export function PieChartCard() {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="font-semibold mb-4">🥧 Distribución</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// AreaChart
export function AreaChartCard() {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="font-semibold mb-4">🔄 Tendencia acumulada</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#2563eb" fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// RadarChart
export function RadarChartCard() {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="font-semibold mb-4">📦 Rendimiento por KPI</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart outerRadius={100} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="KPI" dataKey="A" stroke="#9333ea" fill="#9333ea" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
