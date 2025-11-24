interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

export default function StatCard({
  number,
  label,
  className = "",
}: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {number}
      </div>
      <div className="text-gray-600 text-lg">{label}</div>
    </div>
  );
}

