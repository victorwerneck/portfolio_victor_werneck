interface InsightCardProps {
  number: string;
  title: string;
  description: string;
}

export function InsightCard({ number, title, description }: InsightCardProps) {
  return (
    <div className="border border-neutral-200 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl font-light text-neutral-300 leading-none">
          {number}
        </span>
        <h3 className="text-lg text-neutral-900 pt-1 flex-1">
          {title}
        </h3>
      </div>
      <p className="text-sm text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
