export function Card({ className = "", ...props }) {
  return (
    <div className={`page-card ${className}`} {...props} />
  );
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`mb-3 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }) {
  return (
    <h3 className={`text-xl font-bold text-white ${className}`} {...props} />
  );
}

export function CardDescription({ className = "", ...props }) {
  return (
    <p className={`text-slate-400 text-sm ${className}`} {...props} />
  );
}
