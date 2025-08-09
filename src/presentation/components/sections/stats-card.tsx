/**
 * Componente de estadísticas reutilizable
 */
interface StatsCardProps {
  stats: Array<{
    value: string | number;
    label: string;
  }>;
  className?: string;
}

export function StatsCard({ stats, className = "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" }: StatsCardProps) {
  return (
    <div className={className}>
      {stats.map((stat, index) => (
        <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-[#36d6fa]/20">
          <div className="text-3xl font-bold text-[#36d6fa] mb-2">{stat.value}</div>
          <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
