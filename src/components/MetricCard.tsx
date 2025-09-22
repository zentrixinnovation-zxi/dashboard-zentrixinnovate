export default function MetricCard({ title, value, icon, change }: any) {
  const isPositive = typeof change === "string" && change.startsWith("+");

  return (
    <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </div>

        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>

      {change && (
        <div
          className={`text-sm font-semibold flex items-center gap-2 ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
          aria-hidden="true"
        >
          <span className="text-xs">{isPositive ? "▲" : "▼"}</span>
          <span>{change}</span>
        </div>
      )}
    </div>
  );
}
